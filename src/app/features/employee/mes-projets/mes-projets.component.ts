import {Component, OnInit} from '@angular/core';
import {Projet} from '../../../core/classes/projet';
import {SpinnerService} from '../../../core/services/in-app/spinner.service';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {AuthService} from '../../../core/services/http/auth.service';
import {ProjetService} from '../../../core/services/http/projet.service';
import {ProjetsAddComponent} from './projets-add/projets-add.component';

@Component({
  selector: 'app-mes-projets',
  templateUrl: './mes-projets.component.html',
  styleUrls: ['./mes-projets.component.scss']
})
export class MesProjetsComponent implements OnInit {

  projets: Projet[] = [];
  public dataSource = new MatTableDataSource<Projet>();
  displayedColumns = ['libelle', 'dateDebut' , 'dateFin', 'competenceAjoutee'];

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              private authService: AuthService,
              private projetService: ProjetService) {
  }

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.spinnerService.activate() ;
    this.projetService.getByEmploye(parseInt(this.authService.getUserId())).subscribe(
      res => {
        this.projets = res ;
        this.dataSource = new MatTableDataSource<Projet>(this.projets);
        this.spinnerService.deactivate();
      },
      error => {
        console.log(error);
        this.spinnerService.deactivate();
      }
    );
  }

  openAddDialog() {
    const dialogRef = this.dialog.open( ProjetsAddComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '400px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.load();
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { CongeAddComponent } from './conge-add/conge-add.component';
import { SpinnerService} from '../../../core/services/in-app/spinner.service';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Conge } from '../../../core/classes/conge';
import { AuthService } from '../../../core/services/http/auth.service';
import { CongeService } from '../../../core/services/http/conge.service';

@Component({
  selector: 'app-mes-conge',
  templateUrl: './mes-conge.component.html',
  styleUrls: ['./mes-conge.component.scss']
})
export class MesCongeComponent implements OnInit {

  conges: Conge[] = [] ;
  public dataSource = new MatTableDataSource<Conge>();
  displayedColumns = ['nature', 'nbJour' , 'dateDebut' , 'dateFin' , 'adresseDurantConge' , 'status'];

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              private authService: AuthService ,
              private congeService: CongeService) { }

  ngOnInit() {
    this.getConges()
  }

  getConges() {
    this.spinnerService.activate() ;
    this.congeService.getByEmploye(parseInt(this.authService.getUserId())).subscribe(
      res => {
        this.conges = res ;
        this.dataSource = new MatTableDataSource<Conge>(this.conges);
        this.spinnerService.deactivate();
      },
      error => {
        console.log(error);
        this.spinnerService.deactivate();
      }
    );
  }

  openAddDialog() {
    const dialogRef = this.dialog.open( CongeAddComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '500px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getConges()
      }
    );
  }


}

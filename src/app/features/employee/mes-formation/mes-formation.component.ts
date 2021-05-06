import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { FormationAddComponent } from './formation-add/formation-add.component';
import { AuthService } from '../../../core/services/http/auth.service';
import { Formation } from '../../../core/classes/formation';
import { FormationService } from '../../../core/services/http/formation.service';

@Component({
  selector: 'app-mes-formation',
  templateUrl: './mes-formation.component.html',
  styleUrls: ['./mes-formation.component.scss']
})
export class MesFormationComponent implements OnInit {

  formations: Formation[] = [] ;
  public dataSource = new MatTableDataSource<Formation>();
  displayedColumns = ['libelleFormation', 'raisonFormation' , 'status'];

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              private authService: AuthService ,
              private formationService: FormationService) { }

  ngOnInit() {
    this.getFormations() ;
  }

  getFormations() {
    this.spinnerService.activate() ;
    this.formationService.getByEmploye(parseInt(this.authService.getUserId())).subscribe(
      res => {
        this.formations = res ;
        this.dataSource = new MatTableDataSource<Formation>(this.formations);
        this.spinnerService.deactivate();
      },
      error => {
        console.log(error);
        this.spinnerService.deactivate();
      }
    );
  }

  openAddDialog() {
    const dialogRef = this.dialog.open( FormationAddComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '400px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getFormations() ;
      }
    );
  }
}

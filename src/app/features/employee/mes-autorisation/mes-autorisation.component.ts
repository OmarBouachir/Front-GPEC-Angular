import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { Autorisation } from '../../../core/classes/autorisation';
import { AutorisationService } from '../../../core/services/http/autorisation.service';
import { AutorisationAddComponent } from './autorisation-add/autorisation-add.component';
import {AuthService} from '../../../core/services/http/auth.service';

@Component({
  selector: 'app-mes-autorisation',
  templateUrl: './mes-autorisation.component.html',
  styleUrls: ['./mes-autorisation.component.scss']
})
export class MesAutorisationComponent implements OnInit {

  autorisations: Autorisation[] = [] ;
  public dataSource = new MatTableDataSource<Autorisation>();
  displayedColumns = ['raissonAutorisation', 'dateAutorisation' , 'status'];

  constructor(private spinnerService : SpinnerService ,
              private dialog: MatDialog ,
              private autorisationService: AutorisationService,
              private authService: AuthService) { }

  ngOnInit() {
    this.getAutorisations() ;
  }

  getAutorisations() {
    this.spinnerService.activate() ;
    this.autorisationService.getByEmploye(parseInt(this.authService.getUserId())).subscribe(
      res => {
        this.autorisations = res ;
        this.dataSource = new MatTableDataSource<Autorisation>(this.autorisations);
        this.spinnerService.deactivate();
      },
      error => {
        console.log(error);
        this.spinnerService.deactivate();
      }
    );
  }

  openAddDialog() {
    const dialogRef = this.dialog.open( AutorisationAddComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '400px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getAutorisations() ;
      }
    );
  }

}

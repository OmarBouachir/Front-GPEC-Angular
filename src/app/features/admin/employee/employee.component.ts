import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeService } from '../../../core/services/http/employee.service';
import { Employe } from '../../../core/classes/employe';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {EmployeeDeleteComponent} from './employee-delete/employee-delete.component';
import {EmployeeUpdateComponent} from './employee-update/employee-update.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employe[] = [] ;
  
  loading = false ;
  public dataSource = new MatTableDataSource<Employe>();
  displayedColumns = ['nom', 'prenom' , 'matricule' , "cin" , "tel" , "actions"];
  

  constructor(private spinnerService : SpinnerService ,
              private dialog: MatDialog ,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployes() ;
  }

  getEmployes() {
    this.loading = true ;
    this.spinnerService.activate() ;
    this.employeeService.getAll().subscribe(
      res => {
        this.employees = res ;
        this.dataSource = new MatTableDataSource<Employe>(this.employees);
        this.spinnerService.deactivate();
      },
      error => {
        this.loading = false ;
        this.spinnerService.deactivate();
      }
    );
  }
  

  openAddDialog() {
    const dialogRef = this.dialog.open( EmployeeAddComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '700px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getEmployes() ;
      }
    );
  }

  openUpdateDialog(employe) {
    const dialogRef = this.dialog.open( EmployeeUpdateComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '700px' , data : employe
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getEmployes() ;
      }
    );
  }

  openDeleteDialog(id) {
    const dialogRef = this.dialog.open( EmployeeDeleteComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '200px' , data : id
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getEmployes() ;
      }
    );
  }

  openDetailsDialog(employee: Employe) {
    const dialogRef = this.dialog.open( EmployeeDetailsComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '600px', data: employee
    });
  }
}

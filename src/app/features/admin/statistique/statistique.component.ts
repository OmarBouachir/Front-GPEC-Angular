import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Employe } from '../../../core/classes/employe';
import {StatComponent} from './stat/stat.component';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { EmployeeService } from '../../../core/services/http/employee.service';
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  employees: Employe[] = [] ;
  loading = false ;
  public dataSource = new MatTableDataSource<Employe>();
  displayedColumns = ['nom', 'prenom' , 'matricule' , "cin" , "tel" , "actions"];

  constructor(private dialog: MatDialog ,
    private spinnerService : SpinnerService ,
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

  openStatDialog(employee: Employe) {
    const dialogRef = this.dialog.open( StatComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '600px', data: employee
    });
  }
  
}



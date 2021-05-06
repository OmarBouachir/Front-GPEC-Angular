import { Component, Inject, OnInit } from '@angular/core';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { EmployeeService } from '../../../../core/services/http/employee.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.scss']
})
export class EmployeeDeleteComponent implements OnInit {

  constructor(private employeService : EmployeeService ,
              @Inject(MAT_DIALOG_DATA) private data: number ,
              public matDialogRef: MatDialogRef<EmployeeDeleteComponent> ,
              private spinnerService : SpinnerService ,
              public dialog: MatDialog ) { }

  ngOnInit() {
  }

  delete() {
    this.spinnerService.activate() ;
    this.employeService.delete(this.data).subscribe(
      res => {
        // this.notificationService.openSnackBar('Group deleted successfully' , 'green-snackbar') ;
        this.spinnerService.deactivate() ;
        this.matDialogRef.close(true)
      },
      err => {
        console.log(err) ;
        // this.notificationService.openSnackBar('Error when deleting group' , 'red-snackbar') ;
        this.spinnerService.deactivate() ;
      });

  }

}

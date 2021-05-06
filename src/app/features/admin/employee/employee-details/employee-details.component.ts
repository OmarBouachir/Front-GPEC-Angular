import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Employe} from '../../../../core/classes/employe';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Employe
  ) { }

  ngOnInit() {
    if(!this.data) {
      ;
    }
  }

}

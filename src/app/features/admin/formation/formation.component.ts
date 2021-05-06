import {Component, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {SpinnerService} from '../../../core/services/in-app/spinner.service';
import {FormationService} from '../../../core/services/http/formation.service';
import {Formation} from '../../../core/classes/formation';
import {Status} from '../../../core/enums/status';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  formations: Formation[] = [];
  loading = false;
  public dataSource = new MatTableDataSource<Formation>();
  displayedColumns = ['libelleFormation', 'raisonFormation', 'employeNom', 'employePrenom', 'status'];

  constructor(
    private dialog: MatDialog,
    private spinnerService: SpinnerService,
    private formationService: FormationService
  ) {
  }

  ngOnInit() {
   this.load();
  }

  load(): void {
    this.loading = true;
    this.spinnerService.activate();
    this.formationService.getAll().subscribe(
      res => {
        this.loading = false;
        this.formations = res;
        this.dataSource = new MatTableDataSource<Formation>(this.formations);
        this.spinnerService.deactivate();
      },
      error => {
        console.log(error);
        this.loading = false;
        // this.error = true ;
        this.spinnerService.deactivate();
      }
    );
  }

  changeStatus(formation: Formation, status: string) {
    if(status === 'accepted') {
      formation.status = Status.ACCEPTED;
    }else if (status === 'refused') {
      formation.status = Status.REFUSED;
    }
    this.formationService.answer(formation).subscribe(
      res => {
        this.load();
      }, error => {
        console.log(error);
      }
    )
  }

}

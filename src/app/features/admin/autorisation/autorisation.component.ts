import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { AutorisationService } from '../../../core/services/http/autorisation.service';
import { Autorisation } from '../../../core/classes/autorisation';
import { Status } from '../../../core/enums/status';

@Component({
  selector: 'app-autorisation',
  templateUrl: './autorisation.component.html',
  styleUrls: ['./autorisation.component.scss']
})
export class AutorisationComponent implements OnInit {

  autorisations: Autorisation[] = [];
  loading = false;
  public dataSource = new MatTableDataSource<Autorisation>();
  displayedColumns = ['date', 'raison', 'employeNom', 'employePrenom', 'status'];

  constructor(
    private dialog: MatDialog,
    private spinnerService: SpinnerService,
    private autorisationService: AutorisationService
  ) {
  }

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.spinnerService.activate();
    this.autorisationService.getAll().subscribe(
      res => {
        this.loading = false;
        this.autorisations = res;
        this.dataSource = new MatTableDataSource<Autorisation>(this.autorisations);
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

  changeStatus(autorisation: Autorisation, status: string) {
    if(status === 'accepted') {
      autorisation.status = Status.ACCEPTED;
    }else if (status === 'refused') {
      autorisation.status = Status.REFUSED;
    }
    this.autorisationService.answer(autorisation).subscribe(
      res => {
        this.load();
      }, error => {
        console.log(error);
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Conge } from '../../../core/classes/conge';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { CongeService } from '../../../core/services/http/conge.service';
import { Status } from '../../../core/enums/status';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.scss']
})
export class CongeComponent implements OnInit {

  conges: Conge[] = [];
  loading = false;
  public dataSource = new MatTableDataSource<Conge>();
  displayedColumns = ['employeNom', 'employePrenom', 'nature', 'nbJour', 'dateDebut', 'dateFin', 'adresseDurantConge', 'status'];

  constructor(private dialog: MatDialog,
              private spinnerService: SpinnerService,
              private congeServcie: CongeService
  ) {
  }

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.spinnerService.activate();
    this.congeServcie.getAll().subscribe(
      res => {
        this.loading = false;
        this.conges = res;
        this.dataSource = new MatTableDataSource<Conge>(this.conges);
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

  changeStatus(conge: Conge, status: string) {
    if(status === 'accepted') {
      conge.status = Status.ACCEPTED;
    }else if (status === 'refused') {
      conge.status = Status.REFUSED;
    }
    this.congeServcie.answer(conge).subscribe(
      res => {
        this.load();
      }, error => {
        console.log(error);
      }
    )
  }
}

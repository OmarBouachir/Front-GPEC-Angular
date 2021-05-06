import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { AuthService } from '../../../../core/services/http/auth.service';
import { Conge} from '../../../../core/classes/conge';
import { CongeService } from '../../../../core/services/http/conge.service';

@Component({
  selector: 'app-conge-add',
  templateUrl: './conge-add.component.html',
  styleUrls: ['./conge-add.component.scss']
})
export class CongeAddComponent {

  addForm: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<CongeAddComponent>,
              private snackbarService: SnackbarService ,
              private authService: AuthService ,
              private congeService: CongeService)
  {
    this.addForm = new FormGroup({
      nature: new FormControl("", Validators.required),
      nbJour: new FormControl("" , Validators.required),
      dateDebut: new FormControl("", Validators.required),
      dateFin: new FormControl("" , Validators.required),
      adresseDurantConge: new FormControl("", Validators.required),
    });
  }

  add() {
    this.spinnerService.activate();
    let conge: Conge = {
      ...this.addForm.value ,
      employe: {
        id: this.authService.getUserId()
      }
    }
    this.congeService.add(conge).subscribe(
      res => {
        this.snackbarService.openSnackBar('Demande envoyé avec succes', 'green-snackbar');
        this.spinnerService.deactivate();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de l\'envoie de demande', 'red-snackbar');
        this.spinnerService.deactivate();
      }
    );
    this.matDialogRef.close();
  }
}

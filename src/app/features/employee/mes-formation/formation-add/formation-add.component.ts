import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { AuthService } from '../../../../core/services/http/auth.service';
import { Formation } from '../../../../core/classes/formation';
import { FormationService } from '../../../../core/services/http/formation.service';

@Component({
  selector: 'app-formation-add',
  templateUrl: './formation-add.component.html',
  styleUrls: ['./formation-add.component.scss']
})
export class FormationAddComponent {

  addForm: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<FormationAddComponent>,
              private snackbarService: SnackbarService ,
              private authService: AuthService ,
              private formationService: FormationService)
  {
    this.addForm = new FormGroup({
      libelleFormation: new FormControl("", Validators.required),
      raisonFormation: new FormControl("" , Validators.required),
    });
  }

  add() {
    this.spinnerService.activate();
    let formation: Formation = {
      ...this.addForm.value ,
      employe: {
        id: this.authService.getUserId()
      }
    }
    this.formationService.add(formation).subscribe(
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

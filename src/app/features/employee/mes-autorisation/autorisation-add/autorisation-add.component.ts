import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { AuthService } from '../../../../core/services/http/auth.service';
import { Autorisation } from '../../../../core/classes/autorisation';
import { AutorisationService } from '../../../../core/services/http/autorisation.service';

@Component({
  selector: 'app-autorisation-add',
  templateUrl: './autorisation-add.component.html',
  styleUrls: ['./autorisation-add.component.scss']
})
export class AutorisationAddComponent implements OnInit {

  addForm: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<AutorisationAddComponent>,
              private snackbarService: SnackbarService ,
              private authService: AuthService ,
              private autorisationService: AutorisationService)
  {
    this.addForm = new FormGroup({
      dateAutorisation: new FormControl("", Validators.required),
      raissonAutorisation: new FormControl("" , Validators.required),
    });
  }

  ngOnInit() {
  }

  add() {
    this.spinnerService.activate();
    let autorisation: Autorisation = {
      ...this.addForm.value ,
      employe: {
        id: this.authService.getUserId()
      }
    }
    this.autorisationService.add(autorisation).subscribe(
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

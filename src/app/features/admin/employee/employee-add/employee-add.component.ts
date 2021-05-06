import { Component } from '@angular/core';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { AuthService } from '../../../../core/services/http/auth.service';
import {User} from '../../../../core/classes/user';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent {

  addForm: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<EmployeeAddComponent>,
              private snackbarService: SnackbarService ,
              private authService: AuthService)
  {
    this.addForm = new FormGroup({
      nom: new FormControl("", Validators.required),
      prenom: new FormControl("" , Validators.required),
      email: new FormControl("", Validators.required),
      matricule: new FormControl(""),
      dateLieuNaissance: new FormControl(""),
      nationnalite: new FormControl(""),
      etatCivil: new FormControl(""),
      nombreEnfant: new FormControl(""),
      adresse: new FormControl(""),
      cin: new FormControl(""),
      tel: new FormControl(""),
      delivreLe: new FormControl(""),
      numeroCnss: new FormControl(""),
      numeroPermisConduire: new FormControl(""),
      categoriePermis: new FormControl(""),
      niveauInstruction: new FormControl(""),
      diplome: new FormControl(""),
      anneeDiplome: new FormControl(""),
      etablissement: new FormControl(""),
      dateEmbauche: new FormControl(""),
      typeContrat: new FormControl(""),
      debutContrat: new FormControl(""),
      finContrat: new FormControl(""),
      salaireNet: new FormControl(""),
      qualification: new FormControl(""),
      dateDebutQualification: new FormControl(""),
      affectation: new FormControl(""),
      departement: new FormControl(""),
      section: new FormControl(""),
      dateTitularisation: new FormControl(""),
      competenceAcademique: new FormControl(""),
      acces: new FormControl(""),
    });
  }

  add() {
    this.spinnerService.activate();
    let user: User = {
      id: null ,
      employe: {...this.addForm.value },
      email: this.addForm.value.email ,
      password: this.addForm.value.password ,
      roles: null ,
      rh: null,
      active: null
    }

    this.authService.signup(user).subscribe(
        (res) => {
        this.spinnerService.deactivate();
        this.snackbarService.openSnackBar('Employé ajouté avec succés', 'green-snackbar');
        this.matDialogRef.close();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout', 'red-snackbar');
        this.spinnerService.deactivate();
      }
    );
  }

}

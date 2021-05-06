import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { AuthService } from '../../../../core/services/http/auth.service';
import { EmployeeService } from '../../../../core/services/http/employee.service';
import {Employe} from '../../../../core/classes/employe';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent {

  updateForm: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<EmployeeUpdateComponent>,
              private snackbarService: SnackbarService ,
              private authService: AuthService ,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private employeService: EmployeeService)
  {
    this.updateForm = new FormGroup({
      nom: new FormControl(data ? data.nom : "", Validators.required),
      prenom: new FormControl(data ? data.prenom : "" , Validators.required),
      matricule: new FormControl(data ? data.matricule : ""),
      dateLieuNaissance: new FormControl(data ? data.dateLieuNaissance : ""),
      nationnalite: new FormControl(data ? data.nationnalite : ""),
      etatCivil: new FormControl(data ? data.etatCivil : ""),
      nombreEnfant: new FormControl(data ? data.nombreEnfant : ""),
      adresse: new FormControl(data ? data.adresse : ""),
      cin: new FormControl(data ? data.cin : ""),
      tel: new FormControl(data ? data.tel : ""),
      delivreLe: new FormControl(data ? data.delivreLe : ""),
      numeroCnss: new FormControl(data ? data.numeroCnss : ""),
      numeroPermisConduire: new FormControl(data ? data.numeroPermisConduire : ""),
      categoriePermis: new FormControl(data ? data.categoriePermis : ""),
      niveauInstruction: new FormControl(data ? data.niveauInstruction : ""),
      diplome: new FormControl(data ? data.diplome : ""),
      anneeDiplome: new FormControl(data ? data.anneeDiplome : ""),
      etablissement: new FormControl(data ? data.etablissement : ""),
      dateEmbauche: new FormControl(data ? data.dateEmbauche : ""),
      typeContrat: new FormControl(data ? data.typeContrat : ""),
      debutContrat: new FormControl(data ? data.debutContrat : ""),
      finContrat: new FormControl(data ? data.finContrat : ""),
      salaireNet: new FormControl(data ? data.salaireNet : ""),
      qualification: new FormControl(data ? data.qualification : ""),
      dateDebutQualification: new FormControl(data ? data.dateDebutQualification : ""),
      affectation: new FormControl(data ? data.affectation : ""),
      departement: new FormControl(data ? data.departement : ""),
      section: new FormControl(data ? data.section : ""),
      dateTitularisation: new FormControl(data ? data.dateTitularisation : ""),
      competenceAcademique: new FormControl(data ? data.competenceAcademique : ""),
      acces: new FormControl(data ? data.acces : ""),
    });
  }


  update() {
    let employe : Employe = {
      id : this.data.id ,
      ...this.updateForm.value
    }
    this.spinnerService.activate()
    this.employeService.update(employe).subscribe(
      res => {
        this.spinnerService.deactivate()
        this.snackbarService.openSnackBar('Donneés Modifié avec succés', 'green-snackbar');
      },
      error => {
        this.snackbarService.openSnackBar('Erreur lors de la modification', 'red-snackbar');
        this.spinnerService.deactivate()
      }
    )
    this.matDialogRef.close();
  }
}

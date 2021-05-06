import {Component} from '@angular/core';
import {SpinnerService} from '../../../../core/services/in-app/spinner.service';
import {MatDialogRef} from '@angular/material';
import {SnackbarService} from '../../../../core/services/in-app/snackbar.service';
import {AuthService} from '../../../../core/services/http/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjetService} from '../../../../core/services/http/projet.service';
import {Projet} from '../../../../core/classes/projet';

@Component({
  selector: 'app-projets-add',
  templateUrl: './projets-add.component.html',
  styleUrls: ['./projets-add.component.scss']
})
export class ProjetsAddComponent {

  addForm: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public matDialogRef: MatDialogRef<ProjetsAddComponent>,
              private snackbarService: SnackbarService,
              private authService: AuthService,
              private projetService: ProjetService) {
    {
      this.addForm = new FormGroup({
        libelle: new FormControl('', Validators.required),
        competenceAjoutee: new FormControl('', Validators.required),
        dateDebut: new FormControl('', Validators.required),
        dateFin: new FormControl('', Validators.required),

      });
    }
  }

  add() {
    this.spinnerService.activate();
    let projet: Projet = {
      ...this.addForm.value
    };
    this.projetService.add(projet, parseInt(this.authService.getUserId())).subscribe(
      res => {
        this.snackbarService.openSnackBar('Projet ajouté avec succes', 'green-snackbar');
          this.spinnerService.deactivate();
          this.matDialogRef.close();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de l\'envoie de l\'ajoute de projet', 'red-snackbar');
        this.spinnerService.deactivate();
      }
    );

  }

}

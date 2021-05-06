import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../core/components/sidebar/sidebar.component'
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from '../admin/employee/employee.component';
import { EmployeeAddComponent } from '../admin/employee/employee-add/employee-add.component';
import { CongeAddComponent } from '../employee/mes-conge/conge-add/conge-add.component';
import { CongeComponent } from '../admin/conge/conge.component';
import { AutorisationComponent } from '../admin/autorisation/autorisation.component';
import { FormationComponent } from '../admin/formation/formation.component';
import { MesCongeComponent } from '../employee/mes-conge/mes-conge.component';
import { MesFormationComponent } from '../employee/mes-formation/mes-formation.component';
import { MesAutorisationComponent } from '../employee/mes-autorisation/mes-autorisation.component';
import { AutorisationAddComponent } from '../employee/mes-autorisation/autorisation-add/autorisation-add.component';
import { FormationAddComponent } from '../employee/mes-formation/formation-add/formation-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeUpdateComponent } from '../admin/employee/employee-update/employee-update.component';
import { EmployeeDetailsComponent } from '../admin/employee/employee-details/employee-details.component';
import { EmployeeDeleteComponent } from '../admin/employee/employee-delete/employee-delete.component';
import { StatistiqueComponent } from '../admin/statistique/statistique.component';
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatDialogModule,
  MatSliderModule,
  MatListModule,
  MatIconModule,
  MatRippleModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatTableModule,
} from '@angular/material';
import {MesProjetsComponent} from '../employee/mes-projets/mes-projets.component';
import {ProjetsAddComponent} from '../employee/mes-projets/projets-add/projets-add.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent ,
    children : [
      {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full',
      },
      {
        path: 'employees',
        component : EmployeeComponent
      },
      {
        path: 'conges',
        component : CongeComponent
      },
      {
        path: 'formations',
        component : FormationComponent
      },
      {
        path: 'autorisations',
        component : AutorisationComponent
      },
      {
        path: 'mes-autorisations',
        component : MesAutorisationComponent
      },
      {
        path: 'mes-conges',
        component : MesCongeComponent
      },
      {
        path: 'mes-formations',
        component : MesFormationComponent
      },
      {
        path: 'mes-projets',
        component : MesProjetsComponent
      },
      {
        path: 'statistique',
        component : StatistiqueComponent
      },
    ]
  },
];


@NgModule({
  declarations: [
    StatistiqueComponent,
    SidebarComponent,
    MainComponent,
    EmployeeComponent,
    EmployeeAddComponent ,
    CongeComponent ,
    AutorisationComponent,
    FormationComponent,
    MesCongeComponent,
    CongeAddComponent ,
    MesFormationComponent,
    FormationAddComponent ,
    MesAutorisationComponent,
    AutorisationAddComponent,
    EmployeeUpdateComponent,
    EmployeeDetailsComponent,
    EmployeeDeleteComponent,
    MesProjetsComponent,
    ProjetsAddComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    // MainRoutingModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatDialogModule,
    MatSliderModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule
  ],
  entryComponents : [
    EmployeeAddComponent ,
    CongeAddComponent ,
    FormationAddComponent ,
    AutorisationAddComponent,
    EmployeeUpdateComponent,
    EmployeeDetailsComponent,
    EmployeeDeleteComponent,
    ProjetsAddComponent,
  ]
})
export class MainModule { }

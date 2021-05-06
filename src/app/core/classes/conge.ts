import { Employe } from './employe';
import { Status } from '../enums/status';

export  class Conge {
  id: number;
  nature: string;
  nbJour: string;
  dateDebut: string;
  dateFin: string;
  adresseDurantConge: string;
  status: Status ;
  employe: Employe;
}

import { Status } from '../enums/status';
import { Employe } from './employe';

export  class Autorisation {
  id: number;
  dateAutorisation: string;
  raissonAutorisation: string;
  status: Status ;
  employe: Employe;
}

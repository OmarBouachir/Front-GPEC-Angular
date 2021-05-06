import { Status } from '../enums/status';
import { Employe } from './employe';

export  class Formation {
  id;
  libelleFormation: string;
  raisonFormation: string;
  status: Status ;
  employe: Employe;
}

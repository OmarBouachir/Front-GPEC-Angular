import { Employe } from './employe';
import { Rh } from './rh';

export class User {
   id: number;
   email: string;
   password: string;
   active: boolean;
   roles: string;
   employe: Employe ;
   rh: Rh;
}

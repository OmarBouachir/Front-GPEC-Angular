import { Projet } from './projet';

export  class Employe {
    id: number;
    nom: string;
    prenom: string;
    matricule: string;
    dateLieuNaissance: string;
    nationnalite: string;
    etatCivil: string;
    nombreEnfant;
    adresse: string;
    cin: number;
    tel: number;
    delivreLe: string;
    numeroCnss: number;
    numeroPermisConduire: number;
    categoriePermis: string;
    niveauInstruction: string;
    diplome: string;
    anneeDiplome: string;
    etablissement: string;
    dateEmbauche: string;
    typeContart: string;
    debutContrat: string;
    finContrat: string;
    salaireNet: number;
    qualification: string;
    dateDebutQualification: string;
    affectation: string;
    departement: string;
    section: string;
    dateTitularisation: string;
    competenceAcademique: string;
    acces: boolean ;
    projets: Projet[];
}

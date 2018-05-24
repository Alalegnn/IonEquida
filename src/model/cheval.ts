import { TypeCheval } from "./typeCheval";
export class Cheval{
	public id: number;
	public nom : string ;
	public sexe : string ;
	public prixDepart : number ;
	public typeCheval : TypeCheval ;

    constructor(id: number, nom : string, sexe: string) {
        this.id=id;
		this.nom = nom;
		this.sexe = sexe;
    }
}

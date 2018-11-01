import {Categorie} from './enums/categorie.enum';

export class Produit {
  id: number;
  nom: string;
  quantiteRestante: number;
  quantiteAAcheter: number;
  categorie: Categorie;
}

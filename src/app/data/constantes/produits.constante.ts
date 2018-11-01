import {Produit} from '../produit';
import {Categorie} from '../enums/categorie.enum';

export const PRODUITS: Produit[] = [
  {id: 1,
    nom: 'tomate',
    quantiteRestante: 0,
    quantiteAAcheter: 0,
    categorie: Categorie.LEGUMES},
  {id: 1,
    nom: 'steack',
    quantiteRestante: 3,
    quantiteAAcheter: 0,
    categorie: Categorie.VIANDE},
  {id: 1,
    nom: 'glace',
    quantiteRestante: 0,
    quantiteAAcheter: 2,
    categorie: Categorie.DESSERT},
  {id: 1,
    nom: 'poisson pané',
    quantiteRestante: 5,
    quantiteAAcheter: 0,
    categorie: Categorie.POISSON}
];

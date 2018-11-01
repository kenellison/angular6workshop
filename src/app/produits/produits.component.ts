import { Component, OnInit } from '@angular/core';
import { PRODUITS } from '../data/constantes/produits.constante';
import {Produit} from '../data/produit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits = PRODUITS;
  afficherFormulaire = false;

  constructor() {
    this.produits.sort((a: Produit, b: Produit) => {
      if (a.categorie < b.categorie) return -1;
      else if (a.categorie > b.categorie) return 1;
      else return 0;
    });
  }

  ngOnInit() {
  }

  ajouterProduitAAcheter(produit: Produit) {
    produit.quantiteAAcheter++;
  }

  enleverProduitAAcheter(produit: Produit) {
    produit.quantiteAAcheter--;
  }

  afficherFormCreationProduit() {
    this.afficherFormulaire = !this.afficherFormulaire;
  }

}

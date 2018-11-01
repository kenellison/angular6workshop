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
    this.trierProduits();
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

  onAjouterProduit(produit: Produit) {
    console.log('produit ajouté a recuperer' + produit);
    this.produits.push(produit);
    this.trierProduits();
    this.afficherFormulaire = !this.afficherFormulaire;

  }

  trierProduits() {
    this.produits.sort((a: Produit, b: Produit) => {
      if (a.categorie < b.categorie) return -1;
      else if (a.categorie > b.categorie) return 1;
      else return 0;
    });
  }

}

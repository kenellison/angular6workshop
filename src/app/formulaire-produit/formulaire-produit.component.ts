import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import {Categorie} from '../data/enums/categorie.enum';
import {Produit} from "../data/produit";

@Component({
  selector: 'app-formulaire-produit',
  templateUrl: './formulaire-produit.component.html',
  styleUrls: ['./formulaire-produit.component.css']
})
export class FormulaireProduitComponent implements OnInit {

  @Output() ajouterProduit = new EventEmitter<Produit>();
  categories = Categorie;
  produitForm = new FormGroup({
    nom: new FormControl(''),
    quantiteRestante: new FormControl(0),
    categorie: new FormControl(this.categories[0])
  });
  keys: any[];

  constructor() {
    this.keys = Object.keys(this.categories);
    console.log(this.keys);
  }

  ngOnInit() {
  }

  onEnregistrer() {
    let produitAjoute: Produit = new Produit();
    produitAjoute.categorie = this.produitForm.get('categorie').value;
    produitAjoute.nom = this.produitForm.get('nom').value;
    produitAjoute.quantiteRestante = this.produitForm.get('quantiteRestante').value;
    produitAjoute.quantiteAAcheter = 0;
    this.ajouterProduit.emit(produitAjoute);
    console.log(this.produitForm);
    console.log(this.produitForm.get('categorie').value);
  }
}

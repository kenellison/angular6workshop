import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import {Categorie} from '../data/enums/categorie.enum';

@Component({
  selector: 'app-formulaire-produit',
  templateUrl: './formulaire-produit.component.html',
  styleUrls: ['./formulaire-produit.component.css']
})
export class FormulaireProduitComponent implements OnInit {

  categories = Categorie;
  produitForm = new FormGroup({
    nom: new FormControl(''),
    quantiteRestante: new FormControl(0)
  });
  keys: any[];

  constructor() {
    this.keys = Object.keys(this.categories);
  }

  ngOnInit() {
  }

}

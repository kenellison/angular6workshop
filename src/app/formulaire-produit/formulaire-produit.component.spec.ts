import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireProduitComponent } from './formulaire-produit.component';

describe('FormulaireProduitComponent', () => {
  let component: FormulaireProduitComponent;
  let fixture: ComponentFixture<FormulaireProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

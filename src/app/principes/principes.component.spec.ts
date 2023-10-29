import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipesComponent } from './principes.component';

describe('PrincipesComponent', () => {
  let component: PrincipesComponent;
  let fixture: ComponentFixture<PrincipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipesComponent]
    });
    fixture = TestBed.createComponent(PrincipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

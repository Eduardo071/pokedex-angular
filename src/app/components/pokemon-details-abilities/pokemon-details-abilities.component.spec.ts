import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsAbilitiesComponent } from './pokemon-details-abilities.component';

describe('PokemonDetailsAbilitiesComponent', () => {
  let component: PokemonDetailsAbilitiesComponent;
  let fixture: ComponentFixture<PokemonDetailsAbilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailsAbilitiesComponent]
    });
    fixture = TestBed.createComponent(PokemonDetailsAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

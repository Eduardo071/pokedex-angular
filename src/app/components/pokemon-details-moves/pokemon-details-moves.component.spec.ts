import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsMovesComponent } from './pokemon-details-moves.component';

describe('PokemonDetailsMovesComponent', () => {
  let component: PokemonDetailsMovesComponent;
  let fixture: ComponentFixture<PokemonDetailsMovesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailsMovesComponent]
    });
    fixture = TestBed.createComponent(PokemonDetailsMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

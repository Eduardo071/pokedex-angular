import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsTextComponent } from './pokemon-details-text.component';

describe('PokemonDetailsTextComponent', () => {
  let component: PokemonDetailsTextComponent;
  let fixture: ComponentFixture<PokemonDetailsTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailsTextComponent]
    });
    fixture = TestBed.createComponent(PokemonDetailsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

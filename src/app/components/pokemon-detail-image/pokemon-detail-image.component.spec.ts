import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailImageComponent } from './pokemon-detail-image.component';

describe('PokemonDetailImageComponent', () => {
  let component: PokemonDetailImageComponent;
  let fixture: ComponentFixture<PokemonDetailImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailImageComponent]
    });
    fixture = TestBed.createComponent(PokemonDetailImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

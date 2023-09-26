import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsFooterComponent } from './pokemon-details-footer.component';

describe('PokemonDetailsFooterComponent', () => {
  let component: PokemonDetailsFooterComponent;
  let fixture: ComponentFixture<PokemonDetailsFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailsFooterComponent]
    });
    fixture = TestBed.createComponent(PokemonDetailsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

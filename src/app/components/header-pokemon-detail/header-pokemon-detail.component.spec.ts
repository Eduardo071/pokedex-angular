import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPokemonDetailComponent } from './header-pokemon-detail.component';

describe('HeaderPokemonDetailComponent', () => {
  let component: HeaderPokemonDetailComponent;
  let fixture: ComponentFixture<HeaderPokemonDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPokemonDetailComponent]
    });
    fixture = TestBed.createComponent(HeaderPokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

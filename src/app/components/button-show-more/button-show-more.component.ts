import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-button-show-more',
  templateUrl: './button-show-more.component.html',
  styleUrls: ['./button-show-more.component.css']
})
export class ButtonShowMoreComponent {

  constructor(private service: ApiService){}

  setPokemonsQuantity(): void {
    this.service.limitPokemons += 10;
    this.loadPokemons();
  }

  loadPokemons(filterTerm?: string): void {
    if (filterTerm === '' || filterTerm === undefined) {
      this.service.getPokemons(this.service.limitPokemons).subscribe((pokemon) => {
        this.service.pokemonsUrl = pokemon.results.map((pokemon) => pokemon.url);
        this.service.getPokemonsFromUrl(this.service.pokemonsUrl).subscribe((data: any) => {
          this.service.pokemons = data;
          this.service.pokemonsSubject.next(this.service.pokemons);
        });
      });
    } else {
      this.service.getPokemons(this.service.limitPokemons).subscribe((pokemon) => {
        this.service.pokemonsUrl = pokemon.results.filter((pokemon: any) =>
          pokemon.name
            .toLowerCase()
            .includes(filterTerm.toLowerCase())
            .map((pokemon: any) => pokemon.url)
        );
        this.service.getPokemonsFromUrl(this.service.pokemonsUrl).subscribe((data: any) => {
          this.service.pokemons = data;
          this.service.pokemonsSubject.next(this.service.pokemons);
        });
      });
    }
  }
}

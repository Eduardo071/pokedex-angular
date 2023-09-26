import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-container-main',
  templateUrl: './container-main.component.html',
  styleUrls: ['./container-main.component.css'],
})
export class ContainerMainComponent implements OnInit {
  constructor(private service: ApiService) {}
  name: string = '';
  pokemons: Observable<any[]> = this.service.getPokemonsObservable();
  pokemonAnimatedImage: string = this.service.pokemonSpriteAnimatedPath;
  ngOnInit(): void {
    this.loadPokemons();
  }

  onInputChange(newValue: string): void {
    this.name = newValue;
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.service
      .getPokemons(this.service.limitPokemons)
      .subscribe((pokemon) => {
        let filteredPokemonUrls: any = pokemon.results;

        if (this.name && this.name.trim() !== '') {
          const lowerCaseFilter = this.name.toLowerCase().trim();
          filteredPokemonUrls = filteredPokemonUrls.filter((p: any) =>
            p.name.toLowerCase().includes(lowerCaseFilter)
          );
        }

        const pokemonUrls = filteredPokemonUrls.map((p: any) => p.url);

        this.service.getPokemonsFromUrl(pokemonUrls).subscribe((data: any) => {
          this.service.pokemons = data;
          this.service.pokemonsSubject.next(this.service.pokemons);
        });
      });
  }
}

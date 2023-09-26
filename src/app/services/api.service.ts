import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { pokemons } from '../pokemons';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  limitPokemons: number = 10;
  pokemonsUrl!: any;
  pokemons: any = [];
  pokemonsSubject = new BehaviorSubject<any[]>([]);
  pokemonSpriteAnimatedPath: string = `pokemon.sprites.versions['generation-v']['black-white'].animated.front_default`;

  private url = `https://pokeapi.co/api/v2/`;
  constructor(private http: HttpClient) {}

  getPokemonDetails(namePokemon: string): Observable<any> {
    return this.http.get(`${this.url}pokemon/${namePokemon}`);
  }

  getPokemons(pokemonsQuantity: number): Observable<pokemons> {
    return this.http.get<pokemons>(
      `${this.url}pokemon?limit=${pokemonsQuantity}&offset=0`
    );
  }

  getPokemonsDetails(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPokemonDescription(urlPokemon: string): Observable<any> {
    return this.http.get(urlPokemon);
  }

  getPokemonAbilities(urlPokemonAbility: string): Observable<any> {
    return this.http.get(urlPokemonAbility);
  }

  getPokemonsObservable(): Observable<any[]> {
    return this.pokemonsSubject.asObservable();
  }

  getPokemonsFromUrl(pokemonsUrl: string[]): Observable<any[]> {
    const observables: Observable<any>[] = pokemonsUrl.map((url: string) =>
      this.getPokemonsDetails(url)
    );
    return forkJoin(observables);
  }
}

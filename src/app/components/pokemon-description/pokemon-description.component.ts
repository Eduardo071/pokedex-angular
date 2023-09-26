import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.css'],
})
export class PokemonDescriptionComponent {
  pokemon!: any[];
  pokemonImage!: string;
  pokemonName!: string;
  pokemonTypes!: string[];
  pokemonDescriptionText!: string;
  pokemonMoves!: string[];
  pokemonAbilities!: any[];
  constructor(private service: ApiService, private route: ActivatedRoute) {
    this.getPokemon();
  }

  getPokemon() {
    const namePokemon = this.route.snapshot.paramMap.get('name');
    if (namePokemon) {
      this.service.getPokemonDetails(namePokemon).subscribe((data: any) => {
        this.pokemon = data;
        this.pokemonImage =
          data.sprites.other['official-artwork'].front_default;
        this.pokemonName = data.name;
        this.pokemonTypes = data.types;
        this.pokemonMoves = data.moves.splice(0, 50);
        const resultsAbilities = data.abilities.map((ability: any) => {
          return this.service.getPokemonAbilities(ability.ability.url);
        });
        forkJoin(resultsAbilities).subscribe((abilities: any) => {
          this.pokemonAbilities = abilities;
        });
        this.service
          .getPokemonDescription(data.species.url)
          .subscribe((description: any) => {
            this.pokemonDescriptionText = description.flavor_text_entries
              .find((propertyes: any) => propertyes.language.name === 'en')
              .flavor_text.replace(/\f/g, ' ');
          });
      });
    }
  }
}

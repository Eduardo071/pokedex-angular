import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-details-abilities',
  templateUrl: './pokemon-details-abilities.component.html',
  styleUrls: ['./pokemon-details-abilities.component.css'],
})
export class PokemonDetailsAbilitiesComponent {
  @Input() pokemonAbilities!: any;

  getAbilityDescriptionEN(text: any): string {
    return text
      .find((propertyes: any) => propertyes.language.name === 'en')
      .flavor_text.replace(/\f/g, ' ');
  }
}

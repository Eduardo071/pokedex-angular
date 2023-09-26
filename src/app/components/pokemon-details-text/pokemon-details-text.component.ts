import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-details-text',
  templateUrl: './pokemon-details-text.component.html',
  styleUrls: ['./pokemon-details-text.component.css'],
})
export class PokemonDetailsTextComponent {
  @Input() pokemonName!: string;
  @Input() pokemonTypes!: any[];
  @Input() pokemonDescriptionText!: string;
}

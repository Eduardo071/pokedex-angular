import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-details-moves',
  templateUrl: './pokemon-details-moves.component.html',
  styleUrls: ['./pokemon-details-moves.component.css'],
})
export class PokemonDetailsMovesComponent {
  @Input() pokemonMoves!: any;
}

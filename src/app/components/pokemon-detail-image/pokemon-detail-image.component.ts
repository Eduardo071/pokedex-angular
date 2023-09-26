import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pokemon-detail-image',
  templateUrl: './pokemon-detail-image.component.html',
  styleUrls: ['./pokemon-detail-image.component.css'],
})
export class PokemonDetailImageComponent {
  constructor(private service: ApiService) {}
  @Input() pokemonImage!: any;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() pokemon = {
    id: 0,
    nombre: '',
    img: '',
    categoria: '',
    tipo: [''],
    talla: 0,
    peso: 0
  };
}

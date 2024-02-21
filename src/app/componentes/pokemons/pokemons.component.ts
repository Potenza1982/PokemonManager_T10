import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { FormBuscarPokemon } from '../../models/form-buscar-pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {

  pokemons: ({
    id: number,
    nombre: string,
    img: string,
    categoria: string,
    tipo: string[], 
    talla: number,
    peso: number;
  })[] = [];

  cuenta = 0;

  pokemonEncontrado = true;

  formBuscarPokemon = new FormBuscarPokemon("");

  constructor(private servicePokemons: PokemonsService) {}

  ngOnInit() {
    this.pokemons = this.servicePokemons.getPokemons();
    this.cuenta = this.servicePokemons.contarPokemons();
  }

  buscar(nombreDelPokemon: string) {
    this.pokemons = this.servicePokemons.buscarPokemon(nombreDelPokemon);
    this.pokemonEncontrado = this.pokemons.length > 0;
  }

  cancelarBuscar() {
    this.pokemons = this.servicePokemons.getPokemons();
    this.formBuscarPokemon.setNombre('');
  }
}

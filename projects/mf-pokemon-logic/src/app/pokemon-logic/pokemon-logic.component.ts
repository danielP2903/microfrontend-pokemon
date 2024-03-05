import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-logic',
  templateUrl: './pokemon-logic.component.html',
  styleUrl: './pokemon-logic.component.scss'
})
export class PokemonLogicComponent implements OnInit {
  pokemonList:Pokemon[] = []
  public url = "https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon/"

  constructor(private readonly service:PokemonService){}
  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.service.getPokemons().subscribe(data => {
      this.pokemonList = data.filter((poke)=> poke.id < 50 );
      console.log(this.pokemonList);

    })
  }

}

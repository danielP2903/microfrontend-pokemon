import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
   private url = "https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon.json"
  constructor(private readonly http:HttpClient) { }

  getPokemons():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.url);
  }
}

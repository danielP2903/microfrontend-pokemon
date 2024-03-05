export interface Pokemon {
  id:number;
  type:TypePokemon[];
  name:LanguageName,
  base:Base
}

export type TypePokemon = 'Grass' | 'Poison'
export interface LanguageName  {
  english:string;
  japanese:string;
  chinese:string;
  french:string;
}
export interface Base {
  HP: number,
  Attack: number,
  Defense: number,
  SpAttack: number,
  SpDefense: number,
  Speed: number
}

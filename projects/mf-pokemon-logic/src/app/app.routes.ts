import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('../app/pokemon-logic/pokemon-logic.module').then(m => m.PokemonLogicModule),
    pathMatch:'full'
  },
];

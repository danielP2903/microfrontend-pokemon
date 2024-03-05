import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonLogicComponent } from './pokemon-logic.component';

const routes: Routes = [
  {
    path:'',
    component:PokemonLogicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonLogicRoutingModule { }

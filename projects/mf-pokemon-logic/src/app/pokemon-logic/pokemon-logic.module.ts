import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonLogicRoutingModule } from './pokemon-logic-routing.module';
import { PokemonLogicComponent } from './pokemon-logic.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PokemonLogicComponent
  ],
  imports: [
    CommonModule,
    PokemonLogicRoutingModule,
    HttpClientModule
  ],
})
export class PokemonLogicModule { }

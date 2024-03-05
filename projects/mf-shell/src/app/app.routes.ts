import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'pokemons',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfPokemonLogic',
        exposedModule: './MfPokemonLogicModule',
      }).then((m) => m.PokemonLogicModule),
  },
];

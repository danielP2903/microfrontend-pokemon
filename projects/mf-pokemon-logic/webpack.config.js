const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfPokemonLogic',

  exposes: {
    './MfPokemonLogicModule': './projects/mf-pokemon-logic/src/app/pokemon-logic/pokemon-logic.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

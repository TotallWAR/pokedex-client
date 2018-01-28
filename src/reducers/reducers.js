import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'

import authReducer from './authReducer'
import redirectReducer from './redirectReducer'
import UIEffectsReducer from './sharedUIEffectsReducer'
import AuthLayerReducer from './AuthLayerReducer'
import PokemonReducer from './personalArea/pokemonsReducer'

export default combineReducers({
  routing: routerReducer,
  auth: authReducer,
  form: reduxFormReducer,
  redirectUrl: redirectReducer,
  UIEffectsReducer: UIEffectsReducer,
  AuthLayer: AuthLayerReducer,
  pokemons: PokemonReducer
})

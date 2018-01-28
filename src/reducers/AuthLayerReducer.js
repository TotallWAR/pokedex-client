import {
  HIDE_AUTH_LAYER,
  SHOW_AUTH_LAYER
} from '../constants/actionTypes'

const initialState = {
  isAuthLayerOpened: false
}

export default function AuthLayerLayerReducer (state = initialState, action) {
  switch (action.type) {
    case HIDE_AUTH_LAYER:
      return {isAuthLayerOpened: false}
    case SHOW_AUTH_LAYER:
      return {isAuthLayerOpened: true}
    default:
      return state
  }
}

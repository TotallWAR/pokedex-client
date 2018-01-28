import * as types from '../constants/actionTypes'

export function dispatchShowAuthLayer () {
  return function (dispatch) {
    dispatch({
      type: types.SHOW_AUTH_LAYER
    })
  }
}

export function dispatchHideAuthLayer () {
  return function (dispatch) {
    dispatch({
      type: types.HIDE_AUTH_LAYER
    })
  }
}

export function dispatchHideErrorLayer () {
  return function (dispatch) {
    dispatch({
      type: types.HIDE_ERROR_LAYER
    })
  }
}

export function dispatchHideMessageLayer () {
  return function (dispatch) {
    dispatch({
      type: types.HIDE_MESSAGE_LAYER
    })
  }
}

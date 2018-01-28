import {
  REDIRECT_CHANGE_URL
} from '../constants/actionTypes'

const initialState = {
  redirectUrl: '/'
}

export default function redirectReducer (state = initialState, action) {
  switch (action.type) {
    case REDIRECT_CHANGE_URL:
      return {redirectUrl: action.redirectUrl}
    default:
      return state
  }
}

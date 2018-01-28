// import * as types from '../actions/actionTypes';
import cookie from 'react-cookies'
import {
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  LOG_OUT,
  USER_AUTHENTICATED,
  USER_NOT_AUTHENTICATED
} from '../constants/actionTypes'

console.log(cookie)
const initialState = {
  isAuthenticated: !!cookie.load('jwt'),
  user: {},
  jwt: '',
  error: null,
  message: ''
}

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        isAuthenticated: !!cookie.load('jwt'),
        user: action.user,
        jwt: action.jwt,
        error: null,
        message: action.message
      }
    case LOG_IN_ERROR:
      return {
        isAuthenticated: false,
        user: null,
        jwt: null,
        error: action.error,
        message: action.message
      }
    case LOG_OUT:
      return {
        isAuthenticated: false,
        user: null,
        jwt: null,
        error: null,
        message: null
      }
    case USER_AUTHENTICATED:
      return {
        isAuthenticated: true,
        user: action.user,
        jwt: cookie.load('jwt'),
        error: null,
        message: null
      }
    case USER_NOT_AUTHENTICATED:
      return {
        isAuthenticated: false,
        user: null,
        jwt: null,
        error: null,
        message: null
      }
    default:
      return state
  }
}

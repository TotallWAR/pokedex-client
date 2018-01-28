// src/actions/sessionActions.js

import * as types from '../constants/actionTypes'
import authApi from '../api/authApi'
import cookie from 'react-cookies'
import { browserHistory } from 'react-router'
import { dispatchHideAuthLayer } from './UIActions'
import { setRedirectUrl } from '../actions/redirectActions'

export function dispatchLoginSuccess (user) {
  browserHistory.push('/personalArea')
  return {
    type: types.LOG_IN_SUCCESS,
    user: user
  }
}

export function dispatchLoginError (error) {
  return {
    type: types.LOG_IN_ERROR,
    error: error,
    message: error.message
  }
}

export function logInUser (credentials) {
  return function (dispatch) {
    dispatch({
      type: types.LOADING_LAYER_ENABLED
    })
    return authApi.login(credentials).then(async (response) => {
      dispatch({
        type: types.LOADING_LAYER_DISABLED
      })
      if (response.status === 200) {
        await cookie.save('jwt', response.data.jwt, {path: '/'})
        dispatch({
          type: types.HIDE_AUTH_LAYER
        })
        dispatch({
          type: types.LOG_IN_SUCCESS,
          user: response.data.user,
          jwt: response.data.jwt
        })
        browserHistory.push('/personalArea')
      }
    }).catch((error) => {
      dispatch({
        type: types.LOADING_LAYER_DISABLED
      })
      if (!error) {
        dispatch({
          type: types.SHOW_MESSAGE_LAYER,
          message: 'Something went wrong...'
        })
      }
      dispatch(dispatchLoginError({
        error: error,
        message: error.data
      }))
      showMessageLayer(error.status, dispatch)
      console.error(error)
    })
  }
}

export function registerUser (credentials) {
  return function (dispatch) {
    dispatch({
      type: types.LOADING_LAYER_ENABLED
    })
    console.log('register User from main page' + credentials.email)
    return authApi.register(credentials).then(response => {
      dispatch({
        type: types.LOADING_LAYER_DISABLED
      })
      dispatchHideAuthLayer()
      if (response.status === 201) {
        dispatch({
          type: types.HIDE_AUTH_LAYER
        })
        dispatch({
          type: types.SHOW_MESSAGE_LAYER,
          message: 'You are successfully registered! Please login...'
        })
      }
    }).catch((err) => {
      console.log(err)
      dispatch({
        type: types.LOADING_LAYER_DISABLED
      })

      if (err.response.status === 400) {
        // берем все названия полей, в которых ошибка
        let invalidFields = Object.getOwnPropertyNames(err.response.data.error)
        // если их нет, то присваиваемый пустой массив, чтобы не было ошибки далее
        invalidFields = invalidFields.length ? invalidFields : []
        dispatch({
          type: types.SHOW_ERROR_LAYER,
          error: `invalid format in field ${invalidFields[0]}`
        })
        return
      }
      if (err.response.status === 409) {
        dispatch({
          type: types.SHOW_ERROR_LAYER,
          error: 'User already exists'
        })
      }
    })
  }
}

export function dispatchUserUserAuthenticated (user) {
  return {
    type: types.USER_AUTHENTICATED,
    user: user
  }
}

export function dispatchUserNotAuthenticated () {
  cookie.remove('jwt', {path: '/'})
  browserHistory.push('/')
  return {type: types.USER_NOT_AUTHENTICATED}
}

export function checkUserAuth () {
  return function (dispatch) {
    return authApi.checkAuth().then((response) => {
      dispatch(dispatchUserUserAuthenticated(response.data.user))
      dispatch(setRedirectUrl('/personalArea'))
      browserHistory.push('/personalArea')
    }).catch((error) => {
      if (error.status === 401) {
        dispatch(dispatchUserNotAuthenticated({}))
        dispatch(setRedirectUrl('/'))
        browserHistory.push('/')
      }
      console.log(error)
    })
  }
}

export function logOutUser () {
  return (dispatch) => {
    dispatch({
      type: types.LOG_OUT
    })
    dispatchUserNotAuthenticated()
    cookie.remove('jwt', {path: '/'})
    browserHistory.push('/')
  }
}

function showMessageLayer (status, dispatch) {
  switch (status) {
    case 404: {
      dispatch({
        type: types.SHOW_MESSAGE_LAYER,
        message: 'Such user doesn\'t exist.'
      })
      break
    }
    case 401: {
      dispatch({
        type: types.SHOW_MESSAGE_LAYER,
        message: 'Invalid password.'
      })
      break
    }
    case 400: {
      dispatch({
        type: types.SHOW_MESSAGE_LAYER,
        message: 'Could not process the form.'
      })
      break
    }
    default: {
      dispatch({
        type: types.SHOW_MESSAGE_LAYER,
        message: 'Something went wrong...'
      })
    }
  }
}

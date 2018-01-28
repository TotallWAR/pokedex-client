import { REDIRECT_CHANGE_URL } from '../constants/actionTypes'

export function setRedirectUrl (redirectUrl) {
  return {
    type: REDIRECT_CHANGE_URL,
    redirectUrl: redirectUrl
  }
}

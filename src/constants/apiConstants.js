import cookie from 'react-cookies'

export const apiCommonConfig = async () => {
  const jwt = await cookie.load('jwt')
  const csrf = document.getElementById('csrfToken').getAttribute('data-value')
  return {
    timeout: 30000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + jwt,
      'CSRF': csrf
    }
  }
}

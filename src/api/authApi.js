import axios from 'axios'

import endpointsCfg from './endpoints'
import { apiCommonConfig as cfg } from '../constants/apiConstants'

const LOGIN_ENDPOINT = endpointsCfg.server + endpointsCfg.login

const CHECK_AUTH_ENDPOINT = endpointsCfg.server + endpointsCfg.checkAuth

const REGISTER_ENDPOINT = endpointsCfg.server + endpointsCfg.register

class AuthApi {
  static async login (credentials) {
    return axios.post(LOGIN_ENDPOINT, {
      email: credentials.email,
      password: credentials.password
    }, await cfg()).then((res) => {
      return res
    }).catch(err => {
      throw err.response
    })
  }

  static async checkAuth () {
    return axios.get(CHECK_AUTH_ENDPOINT, await cfg()).then((res) => {
      return res
    }).catch(e => {
      if (e.response && e.response.status === 401) {
        throw (new Error({
          status: 401,
          message: 'User unauthorized'
        }))
      }
    })
  }

  static register (credentials) {
    return axios.post(REGISTER_ENDPOINT, {
      email: credentials.email,
      password: credentials.password,
      phone: credentials.phone
    }).then((res) => {
      return res
    }).catch((err) => {
      console.log(err)
      throw (err)
    })
  }
}

export default AuthApi

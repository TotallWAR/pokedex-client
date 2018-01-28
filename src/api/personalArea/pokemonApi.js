// src/api/sessionApi.js;
import axios from 'axios'
import endpointsCfg from '../endpoints'
import { apiCommonConfig as cfg } from '../../constants/apiConstants'

const GET_POKEMONS_ENDPOINT = endpointsCfg.server +
  endpointsCfg.personalArea.pokemons.getPokemons
const GET_FAVOURITE_POKEMONS_ENDPOINT = endpointsCfg.server +
  endpointsCfg.personalArea.pokemons.getFavouritePokemons
const ADD_TO_FAVOURITE_ENDPOINT = endpointsCfg.server +
  endpointsCfg.personalArea.pokemons.addToFavouritePokemons
const REMOVE_FROM_FAVOURITE_ENDPOINT = endpointsCfg.server +
  endpointsCfg.personalArea.pokemons.deleteFromFavouritePokemons
const SEARCH_POKEMONS_ENDPOINT = endpointsCfg.server +
  endpointsCfg.personalArea.pokemons.searchPokemons

class PokemonApi {
  static async getPokemons (pageNumber, amount) {
    return axios.get(`${GET_POKEMONS_ENDPOINT}/${pageNumber}/${amount}`, await cfg())
      .then((res) => {
        console.log('get pokemons done')
        return res
      })
      .catch(e => {
        console.log(e || e.response)
        throw new Error('GET all pokemons error')
      })
  }

  static async getFavouritePokemons (pageNumber, amount) {
    return axios.get(
      `${GET_FAVOURITE_POKEMONS_ENDPOINT}/${pageNumber}/${amount}`, await cfg())
      .then((res) => {
        console.log('get favourite pokemons done')
        return res
      })
      .catch(e => {
        console.log(e || e.response)
        throw new Error('GET favourite pokemons error')
      })
  }

  static async addToFavouritePokemons (pokemonName) {
    return axios.put(`${ADD_TO_FAVOURITE_ENDPOINT}`, {pokemonName}, await cfg())
      .then((res) => {
        console.log('add to favourite done')
        return res
      })
      .catch(e => {
        if (e.response && e.response.status === 409) {
          let err = new Error(e.response.data)
          err.status = 409
          throw err
        }
        console.log(e || e.response)
        throw new Error('add to favourite error')
      })
  }

  static async searchPokemons (pokemonName, pageNumber, amount) {
    return axios.get(
      `${SEARCH_POKEMONS_ENDPOINT}/${pokemonName}/${pageNumber}/${amount}`,
      await cfg()).then((res) => {
      console.log('search pokemons done')
      return res
    }).catch(e => {
      console.log(e || e.response)
      throw new Error('search pokemons error')
    })
  }

  static async removeFromFavouritePokemons (pokemonName, pageNumber, amount) {
    return axios.delete(`${REMOVE_FROM_FAVOURITE_ENDPOINT}/${pokemonName}/${pageNumber}/${amount}`, await cfg())
      .then((res) => {
        console.log('delete from favourite done')
        return res
      })
      .catch(e => {
        console.log(e || e.response)
        throw new Error('Remove from favourite error')
      })
  }
}

export default PokemonApi

import * as types from '../../constants/actionTypes'
import pokemonApi from '../../api/personalArea/pokemonApi'

export function getPokemons (pageNumber, amount) {
  return function (dispatch) {
    dispatch({
      type: types.LOADING_LAYER_ENABLED
    })
    return pokemonApi.getPokemons(pageNumber, amount).then((response) => {
      dispatch({
        type: types.LOADING_LAYER_DISABLED
      })
      if (response.status === 200) {
        dispatch({
          type: types.GET_POKEMONS,
          pokemons: response.data.pokemons,
          totalCount: response.data.totalCount
        })
      }
    }).catch((error) => {
      dispatch({
        type: types.LOADING_LAYER_DISABLED
      })
      dispatch({
        type: types.SHOW_MESSAGE_LAYER,
        message: 'Something wrong... We cant load pokemons =( Try pick necessary page again'
      })
      console.error(error)
    })
  }
}

export function changePokemonPaginationAmount (amount) {
  return async (dispatch) => {
    await dispatch({
      type: types.CHANGE_POKEMON_PAGINATION_AMOUNT,
      pokemonPaginationAmount: amount
    })
  }
}

export function changePokemonPaginationPageNumber (pageNumber) {
  return async (dispatch) => {
    await dispatch({
      type: types.CHANGE_POKEMON_PAGINATION_PAGE_NUMBER,
      pokemonPaginationPageNumber: pageNumber
    })
  }
}

export function getFavouritePokemons (pageNumber, amount) {
  return function (dispatch) {
    dispatch({
      type: types.LOADING_LAYER_ENABLED
    })
    getFavouritePokemonsApi(dispatch, pageNumber, amount)
  }
}

export function addToFavouritePokemons (pokemonName, pageNumber, amount) {
  return function (dispatch) {
    dispatch({
      type: types.LOADING_LAYER_ENABLED
    })
    return pokemonApi.addToFavouritePokemons(pokemonName, pageNumber, amount).then((response) => {
      dispatch({
        type: types.LOADING_LAYER_DISABLED
      })
      if (response.status === 200) {
        dispatch({
          type: types.ADD_FAVOURITE_POKEMON
        })
        dispatch({
          type: types.SHOW_MESSAGE_LAYER,
          message: `Pokemon is successfully added to favourite ones! ^_^`
        })
      }
    }).catch((error) => {
      dispatch({
        type: types.LOADING_LAYER_DISABLED
      })
      if (error.status === 409) {
        dispatch({
          type: types.SHOW_MESSAGE_LAYER,
          message: error.message
        })
        return
      }
      dispatch({
        type: types.SHOW_MESSAGE_LAYER,
        message: 'Something wrong... We cant add pokemon to favourite ones =('
      })
      console.error(error)
    })
  }
}

export function removeFromFavouritePokemons (pokemonName, pageNumber, amount) {
  return async function (dispatch) {
    dispatch({
      type: types.LOADING_LAYER_ENABLED
    })
    return pokemonApi.removeFromFavouritePokemons(pokemonName, pageNumber,
      amount).then(async (response) => {
      dispatch({
        type: types.LOADING_LAYER_DISABLED
      })
      if (response.status === 200) {
        dispatch({
          type: types.GET_FAVOURITE_POKEMONS,
          favouritePokemons: response.data.favouritePokemons,
          totalFavouriteCount: response.data.count
        })
        dispatch({
          type: types.SHOW_MESSAGE_LAYER,
          message: `Pokemon is successfully removed from favourite! ^_^`
        })
      }
    }).catch((error) => {
      dispatch({
        type: types.LOADING_LAYER_DISABLED
      })
      dispatch({
        type: types.SHOW_MESSAGE_LAYER,
        message: 'Something wrong... We cant remove pokemon from favourite ones =('
      })
      console.error(error)
    })
  }
}

export function searchPokemons (pokemonName, pageNumber, amount) {
  return function (dispatch) {
    dispatch({
      type: types.SEARCH_INPUT_CHANGE,
      searchInput: pokemonName
    })
    dispatch({
      type: types.LOADING_LAYER_ENABLED
    })
    // searching at the server
    return pokemonApi.searchPokemons(pokemonName, pageNumber, amount)
      .then((response) => {
        dispatch({
          type: types.LOADING_LAYER_DISABLED
        })
        if (response.status === 200) {
          dispatch({
            type: types.GET_POKEMONS,
            pokemons: response.data.pokemons,
            totalCount: response.data.totalCount
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: types.LOADING_LAYER_DISABLED
        })
        dispatch({
          type: types.SHOW_MESSAGE_LAYER,
          message: 'Something wrong... We cant search pokemons'
        })
        console.error(error)
      })
  }
}

export function resetPagination () {
  return function (dispatch) {
    dispatch({
      type: types.CHANGE_POKEMON_PAGINATION_PAGE_NUMBER,
      pokemonPaginationPageNumber: 1
    })
    dispatch({
      type: types.CHANGE_POKEMON_PAGINATION_AMOUNT,
      pokemonPaginationAmount: 5
    })
  }
}

async function getFavouritePokemonsApi (dispatch, pageNumber, amount) {
  return pokemonApi.getFavouritePokemons(pageNumber, amount).then((response) => {
    dispatch({
      type: types.LOADING_LAYER_DISABLED
    })
    if (response.status === 200) {
      dispatch({
        type: types.GET_FAVOURITE_POKEMONS,
        favouritePokemons: response.data.favouritePokemons,
        totalFavouriteCount: response.data.count
      })
    }
  }).catch((error) => {
    dispatch({
      type: types.LOADING_LAYER_DISABLED
    })
    dispatch({
      type: types.SHOW_MESSAGE_LAYER,
      message: 'Something wrong... We cant load favourite pokemons =('
    })
    console.error(error)
  })
}

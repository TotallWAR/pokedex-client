import {
  GET_POKEMONS,
  GET_FAVOURITE_POKEMONS,
  CHANGE_POKEMON_PAGINATION_AMOUNT,
  CHANGE_POKEMON_PAGINATION_PAGE_NUMBER,
  SEARCH_INPUT_CHANGE,
  ADD_FAVOURITE_POKEMON
  // SET_TOTAL_COUNT_PAGINATION
} from '../../constants/actionTypes'

const initialState = {
  pokemons: [],
  favouritePokemons: [],
  pokemonPaginationAmount: 5,
  pokemonPaginationPageNumber: 1,
  totalCount: 0,
  searchInput: '',
  totalFavouriteCount: 0
}

export default function pokemonsReducer (state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        pokemons: action.pokemons,
        totalCount: action.totalCount,
        favouritePokemons: state.favouritePokemons.slice(),
        pokemonPaginationAmount: state.pokemonPaginationAmount,
        pokemonPaginationPageNumber: state.pokemonPaginationPageNumber,
        searchInput: state.searchInput,
        totalFavouriteCount: state.totalFavouriteCount
      }
    case GET_FAVOURITE_POKEMONS:
      return {
        pokemons: state.pokemons.slice(),
        favouritePokemons: action.favouritePokemons,
        totalFavouriteCount: action.totalFavouriteCount,
        pokemonPaginationAmount: state.pokemonPaginationAmount,
        pokemonPaginationPageNumber: state.pokemonPaginationPageNumber,
        totalCount: state.totalCount,
        searchInput: state.searchInput
      }
    case ADD_FAVOURITE_POKEMON:
      return {
        pokemons: state.pokemons.slice(),
        favouritePokemons: state.favouritePokemons,
        totalFavouriteCount: state.totalFavouriteCount + 1,
        pokemonPaginationAmount: state.pokemonPaginationAmount,
        pokemonPaginationPageNumber: state.pokemonPaginationPageNumber,
        totalCount: state.totalCount,
        searchInput: state.searchInput
      }
    case CHANGE_POKEMON_PAGINATION_AMOUNT:
      return {
        pokemons: state.pokemons.slice(),
        favouritePokemons: state.favouritePokemons.slice(),
        totalFavouriteCount: state.totalFavouriteCount,
        pokemonPaginationAmount: action.pokemonPaginationAmount,
        pokemonPaginationPageNumber: state.pokemonPaginationPageNumber,
        totalCount: state.totalCount,
        searchInput: state.searchInput
      }
    case CHANGE_POKEMON_PAGINATION_PAGE_NUMBER:
      return {
        pokemons: state.pokemons.slice(),
        favouritePokemons: state.favouritePokemons.slice(),
        totalFavouriteCount: state.totalFavouriteCount,
        pokemonPaginationAmount: state.pokemonPaginationAmount,
        pokemonPaginationPageNumber: action.pokemonPaginationPageNumber,
        totalCount: state.totalCount,
        searchInput: state.searchInput
      }
    case SEARCH_INPUT_CHANGE:
      return {
        pokemons: state.pokemons.slice(),
        favouritePokemons: state.favouritePokemons.slice(),
        totalFavouriteCount: state.totalFavouriteCount,
        pokemonPaginationAmount: state.pokemonPaginationAmount,
        pokemonPaginationPageNumber: state.pokemonPaginationPageNumber,
        totalCount: state.totalCount,
        searchInput: action.searchInput
      }
    // case SET_TOTAL_COUNT_PAGINATION:
    //   return {
    //     pokemons: state.pokemons.slice(),
    //     favouritePokemons: state.favouritePokemons.slice(),
    //     pokemonPaginationAmount: state.pokemonPaginationAmount,
    //     pokemonPaginationPageNumber: state.pokemonPaginationPageNumber,
    //     totalCount: action.totalCount,
    //     searchInput: state.searchInput,
    //     totalFavouriteCount:
    //   }
    default:
      return state
  }
}

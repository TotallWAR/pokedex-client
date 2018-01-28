export default {
  server: (process.env.NODE_ENV === 'development' ? `http://${process.env.HOST}:3000` : ''),
  login: '/login',
  register: '/register',
  checkAuth: '/checkAuth',
  personalArea: {
    pokemons: {
      getPokemons: '/personalArea/pokemons/getPokemons',
      getFavouritePokemons: '/personalArea/pokemons/favourite',
      getPokemonById: '/personalArea/pokemons',
      addToFavouritePokemons: '/personalArea/pokemons/favourite/add',
      deleteFromFavouritePokemons: '/personalArea/pokemons/favourite/delete',
      searchPokemons: '/personalArea/pokemons/search'
    }
  }
}

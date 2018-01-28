import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PokemonTable from '../PokemonTable'
import {
  getFavouritePokemons,
  removeFromFavouritePokemons,
  changePokemonPaginationAmount,
  changePokemonPaginationPageNumber
} from '../../../actions/personalArea/pokemonActions'

class FavouritePokemons extends React.Component {
  render () {
    let {
      favouritePokemons,
      pokemonPaginationAmount,
      pokemonPaginationPageNumber,
      changePokemonPaginationPageNumber,
      totalFavouriteCount,
      changePokemonPaginationAmount,
      isLoadingLayerEnabled,
      removeFromFavouritePokemons,
      loadPokemons
    } = this.props
    return (
      <div>
        <PokemonTable
          pokemons={favouritePokemons}
          searchable={false}
          pokemonPaginationAmount={pokemonPaginationAmount}
          pokemonPaginationPageNumber={pokemonPaginationPageNumber}
          changePokemonPaginationPageNumber={changePokemonPaginationPageNumber}
          totalCount={totalFavouriteCount}
          changePokemonPaginationAmount={changePokemonPaginationAmount}
          handleRowSelection={removeFromFavouritePokemons}
          isLoadingLayerEnabled={isLoadingLayerEnabled}
          loadPokemons={loadPokemons}
          dataTip='Click to remove from favourite'
        />
      </div>
    )
  }
}

FavouritePokemons.propTypes = {
  favouritePokemons: PropTypes.array,
  getFavouritePokemons: PropTypes.func,
  pokemonPaginationAmount: PropTypes.number,
  pokemonPaginationPageNumber: PropTypes.number,
  changePokemonPaginationPageNumber: PropTypes.func,
  changePokemonPaginationAmount: PropTypes.func,
  totalFavouriteCount: PropTypes.number,
  removeFromFavouritePokemons: PropTypes.func,
  isLoadingLayerEnabled: PropTypes.bool,
  loadPokemons: PropTypes.func.isRequired
}

function mapStateToProps (store) {
  const {pokemons, UIEffectsReducer} = store
  return {
    favouritePokemons: pokemons.favouritePokemons,
    pokemonPaginationAmount: pokemons.pokemonPaginationAmount,
    pokemonPaginationPageNumber: pokemons.pokemonPaginationPageNumber,
    totalFavouriteCount: pokemons.totalFavouriteCount,
    searchInput: pokemons.searchInput,
    isLoadingLayerEnabled: UIEffectsReducer.isLoadingLayerEnabled
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getFavouritePokemons: bindActionCreators(getFavouritePokemons, dispatch),
    removeFromFavouritePokemons: bindActionCreators(removeFromFavouritePokemons,
      dispatch),
    changePokemonPaginationAmount: bindActionCreators(
      changePokemonPaginationAmount, dispatch),
    changePokemonPaginationPageNumber: bindActionCreators(
      changePokemonPaginationPageNumber, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouritePokemons)

import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PokemonTable from '../PokemonTable'
import {
  getPokemons,
  changePokemonPaginationAmount,
  changePokemonPaginationPageNumber,
  addToFavouritePokemons,
  searchPokemons
} from '../../../actions/personalArea/pokemonActions'

class PokemonList extends React.Component {
  constructor () {
    super()
    this.searchPokemons = this.searchPokemons.bind(this)
  }

  componentDidMount () {
    this.props.loadPokemons()
  }

  searchPokemons (value) {
    let {
      searchPokemons,
      pokemonPaginationAmount,
      pokemonPaginationPageNumber
    } = this.props
    searchPokemons(value.toLowerCase(), pokemonPaginationPageNumber,
      pokemonPaginationAmount)
  }

  render () {
    let {
      pokemons,
      pokemonPaginationAmount,
      pokemonPaginationPageNumber,
      changePokemonPaginationPageNumber,
      totalCount,
      changePokemonPaginationAmount,
      addToFavouritePokemons,
      searchInput,
      isLoadingLayerEnabled,
      loadPokemons
    } = this.props
    return (
      <div>
        <PokemonTable
          pokemons={pokemons}
          searchable={true}
          searchPokemons={this.searchPokemons}
          pokemonPaginationAmount={pokemonPaginationAmount}
          pokemonPaginationPageNumber={pokemonPaginationPageNumber}
          changePokemonPaginationPageNumber={changePokemonPaginationPageNumber}
          totalCount={totalCount}
          changePokemonPaginationAmount={changePokemonPaginationAmount}
          handleRowSelection={addToFavouritePokemons}
          searchInput={searchInput}
          isLoadingLayerEnabled={isLoadingLayerEnabled}
          loadPokemons={loadPokemons}
          dataTip='Click to add to favourite'
        />
      </div>
    )
  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.array,
  getPokemons: PropTypes.func,
  pokemonPaginationAmount: PropTypes.number,
  pokemonPaginationPageNumber: PropTypes.number,
  changePokemonPaginationPageNumber: PropTypes.func,
  changePokemonPaginationAmount: PropTypes.func,
  totalCount: PropTypes.number,
  addToFavouritePokemons: PropTypes.func,
  searchPokemons: PropTypes.func,
  loadPokemons: PropTypes.func.isRequired,
  searchInput: PropTypes.string,
  isLoadingLayerEnabled: PropTypes.bool
}

function mapStateToProps (store) {
  const {pokemons, UIEffectsReducer} = store
  return {
    pokemons: pokemons.pokemons,
    pokemonPaginationAmount: pokemons.pokemonPaginationAmount,
    pokemonPaginationPageNumber: pokemons.pokemonPaginationPageNumber,
    totalCount: pokemons.totalCount,
    searchInput: pokemons.searchInput,
    isLoadingLayerEnabled: UIEffectsReducer.isLoadingLayerEnabled
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPokemons: bindActionCreators(getPokemons, dispatch),
    changePokemonPaginationAmount: bindActionCreators(
      changePokemonPaginationAmount, dispatch),
    changePokemonPaginationPageNumber: bindActionCreators(
      changePokemonPaginationPageNumber, dispatch),
    addToFavouritePokemons: bindActionCreators(
      addToFavouritePokemons, dispatch),
    searchPokemons: bindActionCreators(
      searchPokemons, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)

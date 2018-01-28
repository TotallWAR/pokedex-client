import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab } from 'material-ui/Tabs'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PokemonList from './PokemonList/PokemonList'
import FavouritePokemons from './FavouritePokemons/FavouritePokemons'
import { getTheme } from '../../constants/theme'
import {
  resetPagination,
  getPokemons,
  getFavouritePokemons
} from '../../actions/personalArea/pokemonActions'

const theme = getTheme()
require('./index.scss')

class PersonalArea extends React.Component {
  constructor () {
    super()
    this.loadPokemons = this.loadPokemons.bind(this)
    this.loadFavouritePokemons = this.loadFavouritePokemons.bind(this)
  }

  loadPokemons () {
    let {pokemonPaginationPageNumber, pokemonPaginationAmount, getPokemons} = this.props
    getPokemons(pokemonPaginationPageNumber, pokemonPaginationAmount)
  }

  loadFavouritePokemons () {
    let {pokemonPaginationPageNumber, pokemonPaginationAmount, getFavouritePokemons} = this.props
    getFavouritePokemons(pokemonPaginationPageNumber, pokemonPaginationAmount)
  }

  render () {
    const {resetPagination, allPokemons} = this.props
    return (
      <div className='container personal-area'>
        <MuiThemeProvider muiTheme={theme}>
          <Tabs>
            <Tab
              label="All pokemons"
              onActive={() => {
                resetPagination()
                this.loadPokemons()
              }}
            >
              <div>
                <PokemonList loadPokemons={this.loadPokemons}/>
              </div>
            </Tab>
            <Tab
              label="Favourite"
              onActive={() => {
                resetPagination()
                this.loadFavouritePokemons()
              }}
            >
              <div>
                <FavouritePokemons loadPokemons={this.loadFavouritePokemons}/>
              </div>
            </Tab>
          </Tabs>
        </MuiThemeProvider>
      </div>
    )
  }
}

PersonalArea.propTypes = {
  resetPagination: PropTypes.func.isRequired,
  pokemonPaginationPageNumber: PropTypes.number,
  pokemonPaginationAmount: PropTypes.number,
  getPokemons: PropTypes.func.isRequired,
  getFavouritePokemons: PropTypes.func.isRequired
}

function mapStateToProps (store) {
  const {pokemons} = store
  return {
    pokemonPaginationAmount: pokemons.pokemonPaginationAmount,
    pokemonPaginationPageNumber: pokemons.pokemonPaginationPageNumber,
    allPokemons: pokemons.pokemons
  }
}

function mapDispatchToProps (dispatch) {
  return {
    resetPagination: bindActionCreators(resetPagination, dispatch),
    getPokemons: bindActionCreators(getPokemons, dispatch),
    getFavouritePokemons: bindActionCreators(getFavouritePokemons, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalArea)

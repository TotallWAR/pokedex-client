import React from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Pagination from 'material-ui-pagination'
import FontIcon from 'material-ui/FontIcon'
import ReactTooltip from 'react-tooltip'
import SearchInput from '../SearchInput'

require('./index.scss')

const pokemonCountsAtOnePage = [5, 10, 15]
const columnNames = ['', 'Name', 'Types', 'Abilities', 'Weight', 'Stats']
const tableStyles = {
  columnStyle: {
    width: `${100 / columnNames.length}%`
  }
}

export default class PokemonTable extends React.Component {
  render () {
    let {
      pokemons,
      pokemonPaginationAmount,
      pokemonPaginationPageNumber,
      changePokemonPaginationPageNumber,
      totalCount,
      changePokemonPaginationAmount,
      handleRowSelection,
      searchInput, // value of input
      isLoadingLayerEnabled,
      searchPokemons,
      searchable,
      loadPokemons,
      dataTip
    } = this.props
    // calculate page numbers and their count
    const pageAmount = Math.ceil(+(totalCount || 0) / pokemonPaginationAmount)
    return (
      <div>
        {searchable
          ? (
            <div className='d-flex'>
              <FontIcon
                className="material-icons"
                style={{
                  fontSize: '32px',
                  margin: '10px'
                }}>search
              </FontIcon>
              <SearchInput
                changed={searchPokemons}
              />
            </div>
          )
          : ''
        }
        {
          pokemons.length
            ? (
              <div>
                <MuiThemeProvider>
                  <Table
                    className='pokemons-table'
                    style={{
                      backgroundColor: 'unset',
                      margin: '0 auto',
                      maxHeight: 600,
                      overflow: 'auto'
                    }}
                    onRowSelection={
                      (index) => {
                        handleRowSelection(pokemons[index - 1].name, pokemonPaginationPageNumber, pokemonPaginationAmount)
                      }
                    }
                  >
                    <TableBody
                      displayRowCheckbox={false}
                      style={{
                        backgroundColor: 'unset'
                      }}

                    >
                      {/* Column names */}
                      <TableRow
                        hoverable={false}
                        selectable={false}>
                        {
                          columnNames.map((columnName, index) =>
                            (
                              <TableRowColumn key={index}>
                                {columnName}
                              </TableRowColumn>
                            )
                          )
                        }
                      </TableRow>

                      {/* Pokemon list */}
                      {
                        pokemons.map((pokemon, index) => {
                          const {types, abilities, stats, weight, sprites} = pokemon.info
                          return (
                            <TableRow
                              key={index}
                              style={{
                                height: '30px',
                                borderBottom: '1px solid rgba(224, 224, 224, 0.24)'
                              }}
                              data-tip={dataTip}
                            >
                              {/* Pokemon's avatar */}
                              <TableRowColumn style={tableStyles.columnStyle}>
                                <img src={sprites.front_default}/>

                                {/* one sprite for offline development */}
                                {/* <img src='./img/avatar.png'/> */}
                              </TableRowColumn>

                              <TableRowColumn style={tableStyles.columnStyle}>
                                {pokemon.name}
                              </TableRowColumn>

                              {/* list of pokemon's types */}
                              <TableRowColumn style={tableStyles.columnStyle}>
                                <ul>
                                  {
                                    types.map((el, index) => (
                                      <li key={index}>
                                        {el.type.name}
                                      </li>
                                    ))
                                  }
                                </ul>
                              </TableRowColumn>

                              {/* list of pokemon's Abilities */}
                              <TableRowColumn style={tableStyles.columnStyle}>
                                <ul>
                                  {
                                    abilities.map((el, index) => (
                                      <li key={index}>
                                        {el.ability.name}
                                      </li>
                                    ))
                                  }
                                </ul>
                              </TableRowColumn>

                              {/* pokemon's weight */}
                              <TableRowColumn style={tableStyles.columnStyle}>
                                {weight}
                              </TableRowColumn>

                              {/* list of pokemon's stats */}
                              <TableRowColumn style={tableStyles.columnStyle}>
                                <ul>
                                  {
                                    stats.map((el, index) => (
                                      <li key={index}>
                                        {el.stat.name} : {el.base_stat}
                                      </li>
                                    ))
                                  }
                                </ul>
                              </TableRowColumn>
                            </TableRow>
                          )
                        })
                      }
                    </TableBody>
                  </Table>
                </MuiThemeProvider>
                <ReactTooltip delayShow={150}/>
                <div className='pagination'>

                  {/* Page numbers */}
                  <Pagination
                    styleRoot={{padding: '1em'}}
                    total={pageAmount}
                    current={pokemonPaginationPageNumber}
                    display={5}
                    onChange={
                      async (number) => {
                        await changePokemonPaginationPageNumber(number)
                        searchable && searchInput
                          ? searchPokemons(searchInput)
                          : loadPokemons()
                      }
                    }
                  />
                  <div className='d-flex pagination-show'>
                    <p>Show at page:</p>
                    {
                      pokemonCountsAtOnePage.map((el, index) => (
                        <span
                          className={el === pokemonPaginationAmount
                            ? 'active'
                            : ''}
                          key={index}
                          onClick={
                            async () => {
                              // always return to start for avoiding errors
                              await changePokemonPaginationPageNumber(1)
                              await changePokemonPaginationAmount(el)
                              searchable && searchInput
                                ? searchPokemons(searchInput)
                                : loadPokemons()
                            }
                          }
                        >
                          {el}
                        </span>
                      ))
                    }

                  </div>
                </div>
              </div>
            )
            : isLoadingLayerEnabled ? 'Loading...' : 'Not found'
        }
      </div>
    )
  }
}

PokemonTable.propTypes = {
  pokemons: PropTypes.array.isRequired,
  pokemonPaginationAmount: PropTypes.number.isRequired,
  pokemonPaginationPageNumber: PropTypes.number.isRequired,
  changePokemonPaginationPageNumber: PropTypes.func.isRequired,
  changePokemonPaginationAmount: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  handleRowSelection: PropTypes.func.isRequired,
  searchPokemons: PropTypes.func,
  searchInput: PropTypes.string,
  isLoadingLayerEnabled: PropTypes.bool.isRequired,
  searchable: PropTypes.bool.isRequired,
  loadPokemons: PropTypes.func.isRequired,
  dataTip: PropTypes.string.isRequired
}

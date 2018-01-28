import React from 'react'
import TextField from 'material-ui/TextField'
import debounce from 'lodash/debounce'
import PropTypes from 'prop-types'

const debounceTime = 500

export default class SearchInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
    // debounce the passed in dispatch method
    this.changed = debounce(this.props.changed, debounceTime)
  }

  // pass in the Redux action dispatcher and the
  // returned value via props
  handleChange = e => {
    // React event weirdness requires storing
    // the synthetic event
    const val = e.target.value
    this.setState({value: val}, () => {
      this.changed(val)
    })
  }

  render () {
    return (
      <TextField
        onChange={this.handleChange}
        // if it's needed field to be update only in interval
        // value={this.props.value}
        name="pokemonName"
        label="Search"
      />
    )
  }
}

SearchInput.propTypes = {
  changed: PropTypes.func.isRequired
  // value: PropTypes.string.isRequired
}

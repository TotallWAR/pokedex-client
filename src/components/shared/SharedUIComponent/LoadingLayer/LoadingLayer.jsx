import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PropTypes from 'prop-types'

export default class LoadingLayer extends React.Component {
  render () {
    return (
      <div className='loading-layer' style={{
        'display': this.props.isLoadingLayerEnabled
          ? 'flex'
          : 'none'
      }}>
        <MuiThemeProvider>
          <CircularProgress
            size={80}
            thickness={5}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

LoadingLayer.propTypes = {
  isLoadingLayerEnabled: PropTypes.bool
}

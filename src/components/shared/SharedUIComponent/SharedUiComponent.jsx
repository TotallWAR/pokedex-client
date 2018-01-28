import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import LoadingLayer from './LoadingLayer'
import AuthLayer from '../../auth/AuthLayer'
import {
  dispatchHideErrorLayer,
  dispatchHideMessageLayer
} from '../../../actions/UIActions'

require('./index.scss')

class SharedUI extends React.Component {
  constructor () {
    super()

    this.hideErrorLayer = this.hideErrorLayer.bind(this)
    this.hideMessageLayer = this.hideMessageLayer.bind(this)
  }

  hideMessageLayer () {
    this.props.dispatchHideMessageLayer()
  }

  hideErrorLayer () {
    this.props.dispatchHideErrorLayer()
  }

  render () {
    const {theme, isLoadingLayerEnabled, errorLayer, messageLayer} = this.props
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.hideErrorLayer}
      />
    ]

    return (
      <div style={{zIndex: '2500'}}>
        <LoadingLayer
          isLoadingLayerEnabled={isLoadingLayerEnabled}/>
        <AuthLayer theme={theme}/>
        <MuiThemeProvider muiTheme={theme}>
          <Dialog
            title='Error'
            actions={actions}
            modal={false}
            open={errorLayer.isErrorLayerEnabled === undefined
              ? false
              : errorLayer.isErrorLayerEnabled}
            onRequestClose={this.hideErrorLayer}
            contentClassName='error-content'
            contentStyle={{
              width: '40%',
              maxWidth: 'none',
              textAlign: 'center'
            }}
            style={{zIndex: '6000'}}
          >
            <p>{errorLayer.error}</p>
          </Dialog>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={theme}>
          <Dialog
            actions={actions}
            modal={false}
            open={messageLayer.isMessageLayerEnabled ===
            undefined
              ? false
              : messageLayer.isMessageLayerEnabled}
            onRequestClose={this.hideMessageLayer}
            style={{zIndex: '5000'}}
            contentClassName='message-layer'
          >
            <p>{messageLayer.message}</p>
          </Dialog>
        </MuiThemeProvider>
      </div>
    )
  }
}

function mapStateToProps (store) {
  return {
    isLoadingLayerEnabled: store.UIEffectsReducer.isLoadingLayerEnabled,
    errorLayer: store.UIEffectsReducer.errorLayer,
    messageLayer: store.UIEffectsReducer.messageLayer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchHideErrorLayer: bindActionCreators(dispatchHideErrorLayer,
      dispatch),
    dispatchHideMessageLayer:
      bindActionCreators(dispatchHideMessageLayer,
        dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SharedUI)

SharedUI.propTypes = {
  isLoadingLayerEnabled: PropTypes.bool,
  dispatchHideMessageLayer: PropTypes.func,
  dispatchHideErrorLayer: PropTypes.func,
  errorLayer: PropTypes.object,
  messageLayer: PropTypes.object,
  theme: PropTypes.object
}

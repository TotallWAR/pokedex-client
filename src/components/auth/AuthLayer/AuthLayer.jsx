import React from 'react'
import Dialog from 'material-ui/Dialog'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Tabs, Tab } from 'material-ui/Tabs'
import PropTypes from 'prop-types'

import FormRegister from './FormRegister'
import FormLogin from './FormLogin'

import * as types from '../../../constants/actionTypes'
import { registerUser, logInUser } from '../../../actions/authActions'
import { colors } from '../../../constants/style'

require('./index.scss')

const styles = {
  tabsStyle: {
    background: colors.greenLight
  }
}

class AuthLayer extends React.Component {
  constructor () {
    super()
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
  }

  register () {
    let {registerUser, form} = this.props
    registerUser(form.FormRegister.values)
  }

  login () {
    let {logInUser, form} = this.props
    logInUser(form.FormLogin.values)
  }

  render () {
    const {theme, isAuthLayerOpened, dispatchHideAuthLayer} = this.props
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Dialog
          modal={false}
          open={isAuthLayerOpened === undefined
            ? false
            : isAuthLayerOpened}
          onRequestClose={dispatchHideAuthLayer}
          contentClassName='content'
          titleClassName='dialog'
          style={{
            zIndex: '3000',
            maxHeight: 'none'
          }}
        >
          <span
            className="close"
            onClick={dispatchHideAuthLayer}>&times;
          </span>
          <Tabs style={{padding: '1em'}}>
            <Tab
              label="Register">
              <div className='d-flex flex-column align-items-center'>
                <FormRegister handleSubmit={this.register}/>
              </div>
            </Tab>
            <Tab
              label="Login">
              <div className='d-flex flex-column align-items-center'>
                <FormLogin handleSubmit={this.login}/>
              </div>
            </Tab>
          </Tabs>
        </Dialog>
      </MuiThemeProvider>
    )
  }
}

function dispatchHideAuthLayer () {
  return function (dispatch) {
    dispatch({
      type: types.HIDE_AUTH_LAYER
    })
  }
}

AuthLayer.propTypes = {
  handleSubmit: PropTypes.func,
  registerUser: PropTypes.func,
  logInUser: PropTypes.func,
  isAuthLayerOpened: PropTypes.bool,
  dispatchHideAuthLayer: PropTypes.func,
  form: PropTypes.object,
  theme: PropTypes.object
}

function mapStateToProps (store) {
  return {
    isAuthLayerOpened: store.AuthLayer.isAuthLayerOpened,
    form: store.form
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchHideAuthLayer: bindActionCreators(dispatchHideAuthLayer,
      dispatch),
    registerUser: bindActionCreators(registerUser,
      dispatch),
    logInUser: bindActionCreators(logInUser,
      dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLayer)

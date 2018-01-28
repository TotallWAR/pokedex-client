import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Logo from '../shared/Logo'
import { dispatchShowAuthLayer } from '../../actions/UIActions'
import { logOutUser } from '../../actions/authActions'

require('./index.scss')

class Header extends React.Component {
  render () {
    const {currentUser, dispatchShowAuthLayer, dispatchLogOutUser} = this.props
    return (
      <header>
        <MuiThemeProvider>

          <section
            className="header col-12 d-flex align-items-center justify-content-end">
            <Logo/>

            {
              !this.props.isAuthenticated
                ? <RaisedButton
                  label={'Register/login'}
                  onClick={dispatchShowAuthLayer}
                />
                : (
                  <div className='d-flex align-items-center'>
                    <span>{currentUser.email}</span>
                    <RaisedButton
                      label={'Logout'}
                      onClick={dispatchLogOutUser}
                      style={{width: '3em'}}
                    />
                  </div>
                )
            }
          </section>
        </MuiThemeProvider>

      </header>
    )
  }
}

Header.propTypes = {
  dispatchShowAuthLayer: PropTypes.func,
  dispatchLogOutUser: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  currentUser: PropTypes.object
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchShowAuthLayer: bindActionCreators(
      dispatchShowAuthLayer,
      dispatch),
    dispatchLogOutUser: bindActionCreators(
      logOutUser,
      dispatch)
  }
}

function mapStateToProps (store, ownProps) {
  const {auth} = store
  return {
    isAuthenticated: auth.isAuthenticated,
    currentUser: auth.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

import React from 'react'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as authActions from '../../actions/authActions'
import Header from '../Header/index'
import Footer from '../Footer/index'
import SharedUiComponent from '../shared/SharedUIComponent'
import { getTheme } from '../../constants/theme'

const theme = getTheme()

class App extends React.Component {
  componentWillMount () {
    this.props.actions.checkUserAuth()
  }

  componentDidUpdate (prevProps) {
    const {redirectUrl} = this.props
    const isLoggingOut = prevProps.isAuthenticated &&
      !this.props.isAuthenticated
    const isLoggingIn = !prevProps.isAuthenticated &&
      this.props.isAuthenticated

    if (isLoggingIn) {
      // dispatch(navigateTo(redirectUrl));
      browserHistory.push(redirectUrl)
      browserHistory.replace(redirectUrl)
    } else if (isLoggingOut) {

      // do any kind of cleanup or post-logout redirection here
    }
  }

  render () {
    return (
      <div className='App'>
        <SharedUiComponent theme={theme}/>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object,
  redirectUrl: PropTypes.object,
  dispatch: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  actions: PropTypes.object
}

function mapStateToProps (store) {
  return {
    isAuthenticated: store.auth.isAuthenticated,
    redirectUrl: store.redirectUrl
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

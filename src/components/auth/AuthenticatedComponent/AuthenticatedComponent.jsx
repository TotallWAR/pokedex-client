import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import { setRedirectUrl } from '../../../actions/redirectActions'

class AuthenticatedComponent extends React.Component {
  componentDidMount () {
    const {dispatch, currentURL, isAuthenticated} = this.props

    if (!isAuthenticated) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      dispatch(setRedirectUrl(currentURL))
      browserHistory.push('/')
      // browserHistory.push('/login')
    }
  }

  render () {
    return (
      this.props.isAuthenticated
        ? this.props.children
        : null
    )
  }
}

AuthenticatedComponent.propTypes = {
  currentURL: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.element,
  isAuthenticated: PropTypes.bool.isRequired
}

// Grab a reference to the current URL.
function mapStateToProps (store, ownProps) {
  return {
    isAuthenticated: store.auth.isAuthenticated,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(AuthenticatedComponent)
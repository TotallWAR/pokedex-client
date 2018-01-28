import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import configureStore from './reduxStore'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import AuthenticatedComponent from './components/auth/AuthenticatedComponent'
import App from './components/App'
import PersonalArea from './components/PersonalArea'
import MainPage from './components/MainPage'

require('../public/styles/index.scss')

const initialState = window.REDUX_INITIAL_STATE || {}
const store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path='/' component={MainPage}/>
        <Route component={AuthenticatedComponent}>
          <Route path='/personalArea' component={PersonalArea}/>
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))

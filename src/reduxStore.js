import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers/reducers'

export default function (initialState = {}) {
  const store = createStore(reducers, initialState,
    composeWithDevTools(applyMiddleware(thunk)))
  return store
}

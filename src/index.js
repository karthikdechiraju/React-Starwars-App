import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import Login from './components/Login'
import Search from './components/Search'

import authReducer from './reducers/AuthReducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    login:authReducer,
    routing: routerReducer,
    form:formReducer
  }),
  applyMiddleware(thunk)
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <div>
        <Route exact path="/" component={Login}/>
        <Route path="/search" component={Search}/>
      </div>
    </Router>
  </Provider>,
  document.querySelector('.container')
)
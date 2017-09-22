import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import User from './User'
import css from '../App.css'
import { Router, Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'

const store = configureStore()
const history = createHistory()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={User} />
        </Router>
      </Provider>
    )
  }
}

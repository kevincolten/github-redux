import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import User from './User'
import css from '../App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Repo from '../containers/Repo'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={User} />
            <Route path="/:user/:repo" component={Repo} />
          </div>
        </Router>
      </Provider>
    )
  }
}

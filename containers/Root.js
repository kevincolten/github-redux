import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import User from './User'
import css from '../App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Repo from '../containers/Repo'
import Gist from '../containers/Gist'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path={window.location.pathname} component={User} />
            <Route path={`${window.location.pathname}gists/:id`} component={Gist} />
            <Route path={`${window.location.pathname}repos/:user/:repo`} component={Repo} />
          </div>
        </Router>
      </Provider>
    )
  }
}

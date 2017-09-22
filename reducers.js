import { combineReducers } from 'redux'
import {
  SELECT_USER,
  REQUEST_USERS,
  RECEIVE_USERS,
  REQUEST_REPOS,
  RECEIVE_REPOS,
  REQUEST_GISTS,
  RECEIVE_GISTS,
  REQUEST_USER,
  RECEIVE_USER,
  REQUEST_COMMITS,
  RECEIVE_COMMITS
} from './actions'

function selectedUser(state = 'kevincolten', action) {
  switch (action.type) {
    case SELECT_USER:
      fetchRepos(action.user)
      fetchGists(action.user)
      return action.user
    default:
      return state
  }
}

function repos(state = [], action) {
  switch (action.type) {
    case REQUEST_REPOS:
      return []
    case RECEIVE_REPOS:
      return action.repos
    default:
      return state
  }
}

function gists(state = [], action) {
  switch (action.type) {
    case REQUEST_GISTS:
      return []
    case RECEIVE_GISTS:
      return action.gists
    default:
      return state
  }
}

function users(state = [], action) {
  switch (action.type) {
    case REQUEST_USERS:
      return []
    case RECEIVE_USERS:
      return action.users
    default:
      return state
  }
}

function commits(state = [], action) {
  switch (action.type) {
    case REQUEST_COMMITS:
      return []
    case RECEIVE_COMMITS:
      return action.commits
    default:
      return state
  }
}

function userData(state = {}, action) {
  switch (action.type) {
    case REQUEST_USER:
      return {}
    case RECEIVE_USER:
      return action.userData
    default:
      return state
  }
}

const rootReducer = combineReducers({
  repos,
  selectedUser,
  gists,
  users,
  commits,
  userData
})

export default rootReducer

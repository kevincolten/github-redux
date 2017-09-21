import { combineReducers } from 'redux'
import {
  SELECT_USER,
  REQUEST_REPOS,
  RECEIVE_REPOS,
  REQUEST_GISTS,
  RECEIVE_GISTS,
  REQUEST_USER,
  RECEIVE_USER,
} from './actions'

function selectedUser(state = 'kevincolten', action) {
  switch (action.type) {
    case SELECT_USER:
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
  console.log('action', action)
  switch (action.type) {
    case REQUEST_GISTS:
      return []
    case RECEIVE_GISTS:
      return action.gists
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
  userData
})

export default rootReducer

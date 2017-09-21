import fetch from 'isomorphic-fetch'

const headers = {
  'Authorization': `Basic ${btoa('kevincolten:e14c5a32211126ea2fb991585c98d7e6fcd61c03')}`,
  'User-Agent': 'kevincolten'
}

export const REQUEST_REPOS = 'REQUEST_REPOS'
export const RECEIVE_REPOS = 'RECEIVE_REPOS'
export const REQUEST_GISTS = 'REQUEST_GISTS'
export const RECEIVE_GISTS = 'RECEIVE_GISTS'
export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const SELECT_USER = 'SELECT_USER'

export function selectUser(user) {
  return {
    type: SELECT_USER,
    user
  }
}

function requestRepos(user) {
  return {
    type: REQUEST_REPOS,
    user
  }
}

function receiveRepos(user, json) {
  return {
    type: RECEIVE_REPOS,
    user,
    repos: json
  }
}

export function fetchRepos(user) {
  return dispatch => {
    dispatch(requestRepos(user))
    return fetch(`https://api.github.com/users/${user}/repos?sort=updated`, { headers })
      .then(response => response.json())
      .then(json => dispatch(receiveRepos(user, json)))
  }
}

function requestGists(user) {
  return {
    type: REQUEST_GISTS,
    user
  }
}

function receiveGists(user, json) {
  return {
    type: RECEIVE_GISTS,
    user,
    gists: json
  }
}

export function fetchGists(user) {
  return dispatch => {
    dispatch(requestGists(user))
    return fetch(`https://api.github.com/users/${user}/gists`, { headers })
      .then(response => response.json())
      .then(json => dispatch(receiveGists(user, json)))
  }
}

function requestUser(user) {
  return {
    type: REQUEST_USER,
    user
  }
}

function receiveUser(user, json) {
  return {
    type: RECEIVE_USER,
    user,
    userData: json
  }
}

export function fetchUserData(user) {
  return dispatch => {
    dispatch(requestGists(user))
    return fetch(`https://api.github.com/users/${user}`, { headers })
      .then(response => response.json())
      .then(json => dispatch(receiveUser(user, json)))
  }
}

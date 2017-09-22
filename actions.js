import fetch from 'isomorphic-fetch'

const headers = {
  'Authorization': `Basic ${btoa('kevincolten:e14c5a32211126ea2fb991585c98d7e6fcd61c03')}`,
  'User-Agent': 'kevincolten'
}

export const REQUEST_GIST = 'REQUEST_GIST'
export const RECEIVE_GIST = 'RECEIVE_GIST'
export const REQUEST_COMMITS = 'REQUEST_COMMITS'
export const RECEIVE_COMMITS = 'RECEIVE_COMMITS'
export const REQUEST_REPOS = 'REQUEST_REPOS'
export const RECEIVE_REPOS = 'RECEIVE_REPOS'
export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const REQUEST_GISTS = 'REQUEST_GISTS'
export const RECEIVE_GISTS = 'RECEIVE_GISTS'
export const SELECT_USER = 'SELECT_USER'

export function selectUser(user) {
  return {
    type: SELECT_USER,
    user
  }
}

function requestUsers(userStr) {
  return {
    type: REQUEST_USERS,
    userStr
  }
}

function receiveUsers(userStr, items) {
  return {
    type: RECEIVE_USERS,
    userStr,
    users: items
  }
}

export function fetchUsers(userStr) {
  return dispatch => {
    dispatch(requestUsers(userStr))
    return fetch(`https://api.github.com/search/users?q=${userStr}`, { headers })
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(userStr, json.items || [])))
      .catch(e => dispatch(receiveUsers(userStr, [])))
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

function requestCommits(repo) {
  return {
    type: REQUEST_COMMITS,
    repo
  }
}

function receiveCommits(repo, commits) {
  return {
    type: RECEIVE_COMMITS,
    repo,
    commits
  }
}

export function fetchCommits(repo) {
  repo = repo.split('/').slice(-2).join('/')
  return dispatch => {
    dispatch(requestCommits(repo))
    return fetch(`https://api.github.com/repos/${repo}/commits`, { headers })
      .then(response => response.json())
      .then(json => dispatch(receiveCommits(repo, json)))
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

function requestGist(gist) {
  return {
    type: REQUEST_GIST,
    gist
  }
}

function receiveGist(gist) {
  return {
    type: RECEIVE_GIST,
    gist
  }
}

export function fetchGist(gistId) {
  gistId = gistId.split('/').slice(-1)
  return dispatch => {
    dispatch(requestGists(gistId))
    return fetch(`https://api.github.com/gists/${gistId}`, { headers })
      .then(response => response.json())
      .then(gist => dispatch(receiveGist(gist)))
  }
}

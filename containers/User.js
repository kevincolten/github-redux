import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import debounce from 'lodash.debounce'
import {
  selectUser,
  fetchRepos,
  fetchGists,
  fetchUsers
} from '../actions'
import Repos from '../components/Repos'
import Gists from '../components/Gists'
import Users from '../components/Users'

class User extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleUserClick = this.handleUserClick.bind(this)
  }

  handleChange() {
    this.props.dispatch(fetchUsers(this.selectedUser.value.trim()))
  }

  handleUserClick(e) {
    const selectedUser = e.target.closest('[data-user]').getAttribute('data-user');
    this.props.dispatch(fetchRepos(selectedUser))
    this.props.dispatch(fetchGists(selectedUser))
  }

  render() {
    const { selectedUser, repos, gists, userData, users } = this.props
    return (
      <div>
        <h1 className="text-center">GitHub Browser</h1>
        <input
          ref={(input) => this.selectedUser = input}
          onChange={debounce(this.handleChange, 500)}
          placeholder="User/Org Search"
        />
        <div id="tables">
          <Users users={users} onClick={this.handleUserClick} />
          <Repos repos={repos} />
          <Gists gists={gists} />
        </div>
      </div>
    )
  }
}

User.propTypes = {
  selectedUser: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
  gists: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedUser, repos, gists, users } = state

  return {
    selectedUser,
    repos,
    gists,
    users
  }
}

export default connect(mapStateToProps)(User)

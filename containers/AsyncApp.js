import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  selectUser,
  fetchRepos,
  fetchGists,
  fetchUserData
} from '../actions'
import Picker from '../components/Picker'
import Repos from '../components/Repos'
import UserData from '../components/UserData'
import Gists from '../components/Gists'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectedUser } = this.props
    dispatch(fetchRepos(selectedUser))
    dispatch(fetchGists(selectedUser))
    dispatch(fetchUserData(selectedUser))
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedUser !== prevProps.selectedUser) {
      const { dispatch, selectedUser } = this.props
      dispatch(fetchRepos(selectedUser))
      dispatch(fetchGists(selectedUser))
      dispatch(fetchUserData(selectedUser))
    }
  }

  handleChange(nextUser) {
    this.props.dispatch(selectUser(nextUser))
  }

  render() {
    const { selectedUser, repos, gists, userData } = this.props
    return (
      <div>
        <Picker
          value={selectedUser}
          onChange={this.handleChange}
          options={['kevincolten', 'AustinCodingAcademy']}
        />
        <div id="tables">
          <UserData userData={userData} />
          <Repos repos={repos} />
          <Gists gists={gists} />
        </div>
      </div>
    )
  }
}

AsyncApp.propTypes = {
  selectedUser: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
  gists: PropTypes.array.isRequired,
  userData: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  // console.log(state.repos)
  const { selectedUser, repos, gists, userData } = state

  return {
    selectedUser,
    repos,
    gists,
    userData
  }
}

export default connect(mapStateToProps)(AsyncApp)

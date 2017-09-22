import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import debounce from 'lodash.debounce'
import { fetchCommits } from '../actions'
import Commits from '../components/Commits'

class Repo extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
    this.props.dispatch(fetchCommits(this.props.match.url))
  }

  render() {
    const { commits } = this.props
    return (
      <div>
        <div id="tables">
          <Commits commits={commits} />
        </div>
      </div>
    )
  }
}

Repo.propTypes = {
  commits: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { commits } = state

  return {
    commits
  }
}

export default connect(mapStateToProps)(Repo)

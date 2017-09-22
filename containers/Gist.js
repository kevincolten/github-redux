import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import debounce from 'lodash.debounce'
import { fetchGist } from '../actions'
import Files from '../components/Files'

class Gist extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(fetchGist(this.props.match.url))
  }

  render() {
    const { gist } = this.props
    return (
      <div>
        <div id="tables">
          <Files gist={gist} />
        </div>
      </div>
    )
  }
}

Gist.propTypes = {
  gist: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { gist } = state

  return {
    gist
  }
}

export default connect(mapStateToProps)(Gist)

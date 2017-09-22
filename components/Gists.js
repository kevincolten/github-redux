import React, { Component } from 'react'
import PropTypes from 'prop-types'

function gists(props) {
  return (
    <table>
      <thead><tr><th>Gists</th></tr></thead>
      <tbody>
        {props.gists.map(gist => <tr key={gist.id}><td>{gist.description || 'No Description!'}</td></tr>)}
      </tbody>
    </table>
  )
}

gists.propTypes = {
  gists: PropTypes.array.isRequired
}

export default gists

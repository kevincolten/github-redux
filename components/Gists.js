import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function gists(props) {
  const gists = props.gists.map(gist => {
    return (
      <tr key={gist.id}>
        <td>
          <Link to={`${window.location.pathname}gists/${gist.id}`}>{gist.description || 'No Description!'}</Link>
        </td>
      </tr>
    )
  })

  return (
    <table>
      <thead><tr><th>Gists</th></tr></thead>
      <tbody>
        {gists}
      </tbody>
    </table>
  )
}

gists.propTypes = {
  gists: PropTypes.array.isRequired
}

export default gists

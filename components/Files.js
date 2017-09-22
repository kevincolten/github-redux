import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

function files(props) {
  console.log(props)
  const files = Object.keys(props.gist.files).map(key => {
    return(
      <tr key={key}>
      <td>
        <a href={props.gist.files[key].raw_url} target="_blank">
          <strong>{key}</strong>
          <br />
          {props.gist.files[key].language}
        </a>
      </td>
    </tr>
    )
  })

  return (
    <table>
      <thead><tr><th>Files</th></tr></thead>
      <tbody>{files}</tbody>
    </table>
  )
}

files.propTypes = {
  gist: PropTypes.object.isRequired
}

export default files

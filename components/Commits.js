import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

function commits(props) {
  const commits = props.commits.map(commit => {
    return(
      <tr key={commit.sha}>
      <td>
        <a href={commit.html_url} target="_blank">
          <strong>{commit.commit.message}</strong>
          <br />
          {commit.author.login || commit.commit.author.name}&nbsp;&nbsp;
          {moment.utc(commit.commit.author.date).fromNow()}
        </a>
      </td>
    </tr>
    )
  })

  return (
    <table>
      <thead><tr><th>Commits</th></tr></thead>
      <tbody>{commits}</tbody>
    </table>
  )
}

commits.propTypes = {
  commits: PropTypes.array.isRequired
}

export default commits

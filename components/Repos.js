import React, { Component } from 'react'
import PropTypes from 'prop-types'

function repos(props) {
  const repos = props.repos.map(repo => {
    return(
      <tr key={repo.id}>
      <td>
        <strong>{repo.name}</strong>
        <br />
        {repo.description}
        <br />
        language: {repo.language}
        <br />
        watchers: {repo.watchers_count}&nbsp;&nbsp;forks: {repo.forks_count}
      </td>
    </tr>
    )
  })

  return (
    <table>
      <thead><tr><th>Repositories</th></tr></thead>
      <tbody>{repos}</tbody>
    </table>
  )
}

repos.propTypes = {
  repos: PropTypes.array.isRequired
}

export default repos

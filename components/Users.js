import React, { Component } from 'react'
import PropTypes from 'prop-types'

function users(props) {
  const users = props.users.map(user => {
    return(
      <tr key={user.id} data-user={user.login}>
        <td style={{display: 'flex', alignItems: 'center'}}>
          <div>
            <img src={user.avatar_url} />
          </div>
          <div>
            <strong>{user.login}</strong>
            <br />
            {user.type}
          </div>
        </td>
      </tr>
    )
  })

  return (
    <table>
      <thead><tr><th>Users</th></tr></thead>
      <tbody onClick={props.onClick}>{users}</tbody>
    </table>
  )
}

users.propTypes = {
  users: PropTypes.array.isRequired
}

export default users

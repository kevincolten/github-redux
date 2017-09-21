import React, { Component } from 'react'
import PropTypes from 'prop-types'

 function userData(props) {
  return (
    <table>
      <thead>
        <tr><th>User Profile</th></tr>
      </thead>
      <tbody>
        <tr>
          <td style={{display: 'flex', alignItems: 'center'}}>
            <div>
              <img src={props.userData.avatar_url || props.userData.gravatar_url} />
            </div>
            <div>
              <strong>{props.userData.name}</strong>
              <br />
              @{props.userData.login}
              <br />
              {props.userData.location}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

userData.propTypes = {
  userData: PropTypes.object.isRequired
}

export default userData

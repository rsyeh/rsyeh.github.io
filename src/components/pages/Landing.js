// @flow

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import mastermind from './../../mastermind'
import { topNav, introSection } from './../../snippets/landingPage'
import { landingPageContent } from './../../content'


class Login extends Component {

  componentWillMount() {
    // const user = mastermind.branch('auth').user
    // const isAuthenticated = Object.keys(user).length > 0
    // if (isAuthenticated) { this.props.history.push('/') }
  }

  render() {
    return(
      <div className="">

        { topNav() }

        { introSection(landingPageContent) }

      </div>
    )
  }
}

export default withRouter(Login)


// <button
//   className="ui button login-button full-width"
//   onClick={(e) => {
//     e.preventDefault()
//
//     // get login form inputs
//     const loginCredentials = {
//       email: 'neil',
//       password: undefined
//     }
//
//     // login
//     mastermind.update('localLogin', loginCredentials)
//
//       // redirect on successful login
//       .then((res) => {
//         // const user = res.data.user
//         this.props.history.push('/dashboard')
//       })
// }}>
//   Login
// </button>

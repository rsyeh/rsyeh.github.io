// @flow

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import mastermind from './../../mastermind'

class LoginPage extends Component {

  componentWillMount() {
    // const user = mastermind.branch('auth').user
    // const isAuthenticated = Object.keys(user).length > 0
    // if (isAuthenticated) { this.props.history.push('/') }
  }

  render() {
    return(
      <div className="login-page">
        <form className="ui form login-form">
          <div className="field">
            <div className="ui left icon input">
              <input
                    ref="email-input"
                    type="email"
                    placeholder="email..."/>
              <i className="mail outline icon" />
            </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <input
                    ref="password-input"
                    type="password"
                    placeholder="password..."/>
                <i className="lock icon" />
              </div>
            </div>
          <button
            className="ui button login-button full-width"
            onClick={(e) => {
              e.preventDefault()

              // get login form inputs
              const loginCredentials = {
                email: this.refs['email-input'].value,
                password: this.refs['password-input'].value
              }

              // login
              mastermind.update('localLogin', loginCredentials)

                // redirect on successful login
                .then((res) => {
                  // const user = res.data.user
                  this.props.history.push('/')
                })
          }}>
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginPage)

// @flow

import React, { Component } from 'react'
import mastermind from './../../mastermind'

class TopNav extends Component {

  render() {
    
    const { auth } = this.props

    // if there is no user (i.e. no one is logged in), do not render top nav
    if (!auth.user) return null

    return (
      <nav className="top-nav">
        <button
          className="ui button"
          onClick={mastermind.update.bind(this, 'localLogout')}
        > Logout </button>
      </nav>
    )
  }
}


export default mastermind.connectStore(TopNav, ['auth'])

// @flow

import React, { Component } from 'react'
import mastermind from './../../mastermind'
import HamburgerMenuToggleButton from './HamburgerMenuToggleButton'

class TopNav extends Component {

  render() {

    const { auth } = this.props

    // if there is no user (i.e. no one is logged in), do not render top nav
    if (!auth.user) return null

    console.log('props', this.props)

    return (
      <nav className="nav-menu--top">
        <div className="top-nav-section--left" style={{ display: 'flex' }}>
          <div style={{ margin: 'auto 0 auto 12px'}}> HOME </div>
        </div>
        <div className="top-nav-section--right">
        </div>
        <HamburgerMenuToggleButton />
      </nav>
    )
  }
}


export default mastermind.connectStore(TopNav, ['auth', 'test:example'])

// <button
//   className="ui button"
//   onClick={mastermind.update.bind(this, 'localLogout')}
// > Logout </button>

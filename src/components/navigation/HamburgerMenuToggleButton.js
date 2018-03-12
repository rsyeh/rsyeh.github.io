import React, { Component } from 'react'
import mastermind from './../../mastermind'


class HamburgerMenuToggleButton extends Component {

  toggleMobileMenu = (mobileMenuIsOpen) => {

    mastermind.update('updateNavigationState', { mobileMenuIsOpen: !mobileMenuIsOpen })

  }

  render() {

    const { appState, auth } = this.props

    const { mobileMenuIsOpen } = appState.navigation

    if (!auth.user) return null

    return(
      <button
        className={`button--hamburger-menu-toggle ${ mobileMenuIsOpen ? 'active' : '' }`}
        onClick={e => this.toggleMobileMenu(mobileMenuIsOpen)}>
        <span className="bar" onClick={e => (e.stopPropagation(), this.toggleMobileMenu(mobileMenuIsOpen))}></span>
      </button>
    )
  }
}


export default mastermind.connectStore(HamburgerMenuToggleButton, ['appState', 'auth'])

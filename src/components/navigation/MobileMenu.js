import React, { Component } from 'react'
import mastermind from './../../mastermind'
import HamburgerMenuToggleButton from './HamburgerMenuToggleButton'


class MobileMenu extends Component {

  state = {
    scrollYHeightOnOpening: undefined
  }

  componentDidUpdate(prevProps) {

    /* Snap scroll to origin y position when menu closes */

    // is opening
    if (
      !prevProps.appState.navigation.mobileMenuIsOpen &&
      this.props.appState.navigation.mobileMenuIsOpen
    ) {

      this.setState({ scrollYHeightOnOpening: window.pageYOffset })

    // closing
    } else if (
      prevProps.appState.navigation.mobileMenuIsOpen &&
      !this.props.appState.navigation.mobileMenuIsOpen
    ) {
      window.scrollTo(0, this.state.scrollYHeightOnOpening)
      this.setState({ scrollYHeightOnOpening: undefined })
    }
  }

  render() {

    const { appState } = this.props

    const { mobileMenuIsOpen } = appState.navigation

    return(
      <div className={`nav-menu--mobile ${ mobileMenuIsOpen ? '' : 'closed' }`}>
        <HamburgerMenuToggleButton />
        <h1> Mobile Nav </h1>
      </div>
    )
  }
}


export default mastermind.connectStore(MobileMenu, ['appState'])

import React, { Component } from 'react'
import mastermind from './../../mastermind'
import HamburgerMenuToggleButton from './HamburgerMenuToggleButton'
import { navigationContent } from './../../content'
import { topNavSectionLeft, topNavSectionRight, topSubNav } from './../../snippets/navigation'


class TopNav extends Component {

  showSubMenu = (menuOptionsName) => {
    mastermind.update('updateNavigationState', {
      topSubNavMenuOptions: menuOptionsName.toLowerCase()
    })
  }

  hideSubMenu = () => {
    mastermind.update('updateNavigationState', { topSubNavMenuOptions: undefined })
  }

  render() {

    const { auth, appState } = this.props

    // if there is no user (i.e. no one is logged in), do not render top nav
    if (!auth.user) return null

    const { topSubNavMenuOptions } = appState.navigation

    return (
      <nav
        onMouseLeave={this.hideSubMenu.bind(this)}
        className="nav-menu--top">

        {/* Left */}
        { topNavSectionLeft(navigationContent) }

        {/* Right */}
        { topNavSectionRight(navigationContent, this) }

        {/* Hamburger Button */}
        <HamburgerMenuToggleButton />

        {/* Sub Nav */}
        { topSubNav(navigationContent, this) }
      </nav>
    )
  }
}


export default mastermind.connectStore(TopNav, ['auth', 'appState'])

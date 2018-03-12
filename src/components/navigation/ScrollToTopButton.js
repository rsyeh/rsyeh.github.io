// @flow

import React, { Component } from 'react'
import mastermind from './../../mastermind'
import { animateScroll } from 'react-scroll'

class ScrollToTopButton extends Component {

  render() {

    const { appState } = this.props

    // if there is no user (i.e. no one is logged in), do not render top nav
    if (true) return null

    return (
      <button
        onClick={() => animateScroll.scrollToTop()}
        className="button--scroll-to-top">
        <i className="icon chevron circle up"/>
      </button>
    )
  }
}


export default mastermind.connectStore(ScrollToTopButton, ['appState'])

// @flow

import React, { Component } from 'react'
import mastermind from './../../mastermind'
import { connect } from 'react-redux'

class TopNav extends Component {

  render() {
    const { auth } = this.props

    // if there is no user (i.e. no one is logged in), do not render top nav
    if (!auth.user) return (<div></div>)

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

const mapStateToProps = state => {
  return {
    auth: state.auth.toJS()
  }
}

export default connect(mapStateToProps)(TopNav)

// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import mastermind from './../mastermind'

const actions = {
    addTestData: {
      location: ['data', 'randomNumber'],
      operation: 'setIn',
      value: Math.random()
    }
}

class Page_1 extends Component {

  componentWillMount() {
    this.id = mastermind.createID()
    mastermind.feed(this, ['data'])
  }

  componentWillUnmount() {
    mastermind.removeFeed(this.id)
  }

  render() {
    return (
      <div>
        <h1> Page 1 </h1>
        <Link to='/2'> Page 2 </Link>
        <button onClick={() => mastermind.update('genericStoreUpdate', { actions: {
          addTestData: {
            location: ['data', 'randomNumber'],
            operation: 'setIn',
            value: Math.random()
          }
        }})}>
          Generate Random Number
        </button>
        <h2> Random Number: { mastermind.branch('data').randomNumber || 'no random number generated yet' }</h2>
      </div>
    );
  }
}

export default Page_1

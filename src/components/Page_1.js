// @flow

import React, { Component } from 'react'
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
    mastermind.removeFeed(this)
  }

  render() {
    console.log(mastermind.getState())
    return (
      <div>
        <h1> Page 1 </h1>
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

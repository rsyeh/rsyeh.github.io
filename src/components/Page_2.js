// @flow

import React, { Component } from 'react'
import mastermind from './../mastermind'

class Page_2 extends Component {

  render() {
    console.log(mastermind.getState())
    return (
      <div>
        <h1> Page 2 </h1>
      </div>
    );
  }
}

export default Page_2

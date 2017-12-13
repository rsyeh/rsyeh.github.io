// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import mastermind from './../mastermind'

class Page_2 extends Component {

  render() {
    console.log(mastermind.getState())
    return (
      <div>
        <h1> Page 2 </h1>
        <Link to='/'> Page 1 </Link>
      </div>
    );
  }
}

export default Page_2

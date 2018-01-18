
import React,{ Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { LoginPage, HomePage } from './components/pages'
import { TopNav } from './components/globalParts'
import mastermind from './mastermind'
import { Provider } from 'react-redux'
import { PrivateRoute } from './components/routes'


export default (
  <Provider store={mastermind.store}>
    <BrowserRouter>
      <div>
        <TopNav />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" Component={HomePage} />
      </div>
    </BrowserRouter>
  </Provider>
)


import React,{ Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { LoginPage, HomePage, PageNotFound } from './components/pages'
import { TopNav } from './components/globalParts'
import mastermind from './mastermind'
import { Provider } from 'react-redux'
import { PrivateRoute } from './components/routes'


export default (
    <BrowserRouter>
      <Provider store={mastermind.store}>
        <div>
          <TopNav />
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/" Component={HomePage} />
            <PrivateRoute Component={PageNotFound} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
)

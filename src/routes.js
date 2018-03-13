
import React,{ Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { AdminPage, LoginPage, HomePage, PageNotFound, DesignDocs } from './components/pages'
import { TopNav, MobileMenu, HamburgerMenuToggleButton, ScrollToTopButton } from './components/navigation'
import mastermind from './mastermind'
import { Provider } from 'react-redux'
import { PrivateRoute } from './components/routes'


export default (
    <BrowserRouter>
      <Provider store={mastermind.store}>
        <div>
          <TopNav />
          <MobileMenu />
          <ScrollToTopButton />
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/admin" component={AdminPage} />
            <Route exact path="/design-guide" component={DesignDocs} />
            <PrivateRoute component={PageNotFound} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
)

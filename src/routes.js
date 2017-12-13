
import React from 'react';
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { Page_1, Page_2 } from './components';

export default (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Page_1} />
      <Route exact path="/2" component={Page_2} />
    </div>
  </BrowserRouter>
)

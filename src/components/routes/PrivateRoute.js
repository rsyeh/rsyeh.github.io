import React,{ Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import mastermind from './../../mastermind'


class PrivateRoute extends Component {

  render() {

    const { path, auth, redirectPath } = this.props

    return(
      <div>
        <Route
          path={path || "*"}
          render={ () => auth.user
            ? <this.props.component />
            : <Redirect to={{ pathname: redirectPath || '/login' }} />
          }
        />
      </div>
    )
  }
}


export default mastermind.connectStore(PrivateRoute, ['appState', 'auth'])

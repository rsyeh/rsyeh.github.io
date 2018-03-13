import React,{ Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import mastermind from './../../mastermind'


class PrivateRoute extends Component {

  render() {

    const { path, auth, redirectPath } = this.props

    return(
      <div>
        <Route
          path={path || "*"}
          render={ () => auth.user && Object.keys(auth.user).length > 0
            ? <this.props.component />
            : <Redirect to={{ pathname: redirectPath || '/' }} />
          }
        />
      </div>
    )
  }
}


export default mastermind.connectStore(PrivateRoute, ['appState', 'auth'])

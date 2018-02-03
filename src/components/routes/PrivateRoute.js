import React,{ Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import mastermind from './../../mastermind'

class PrivateRoute extends Component {

  render() {

    const { appState, path } = this.props

    return(
      <div>
        <Route
          path={path || "*"}
          render={ () => appState.auth.user
            ? <this.props.component />
            : <Redirect to={{ pathname: '/login' }} />
          }
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.toJS()
  }
}

export default mastermind.connectStore(PrivateRoute, ['appState'])

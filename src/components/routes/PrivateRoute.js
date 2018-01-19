import React,{ Component } from 'react';
import { Provider, connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'


class PrivateRoute extends Component {

  render() {

    const { auth } = this.props

    return(
      <div>
        <Route render={ () => auth.user
          ? <this.props.Component />
          : <Redirect to={{ pathname: '/login' }} />
        }/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.toJS()
  }
}

export default connect(mapStateToProps)(PrivateRoute)

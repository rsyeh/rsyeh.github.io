import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import routes from './routes'
import init from './init'
import './index.css'


init()
 
const rootElement = document.getElementById('root')

ReactDOM.render(routes, rootElement)

registerServiceWorker()

if (module.hot) {

  module.hot.accept('./routes', () => {

    ReactDOM.render( routes, rootElement )

  })
}

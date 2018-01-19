import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import routes from './routes'
import './index.css'
import './css/custom.css'

const rootElement = document.getElementById('root')

ReactDOM.render(routes, rootElement)

registerServiceWorker()

if (module.hot) {

  module.hot.accept('./routes', () => {

    ReactDOM.render( routes, rootElement )

  })
}

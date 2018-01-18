import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import routes from './routes'
import './index.css'
import './css/custom.css'

ReactDOM.render(routes, document.getElementById('root'))

registerServiceWorker()

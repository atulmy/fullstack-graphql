// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

// App Imports
import {store} from './setup/store'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

console.log(store.getState())

// Render App
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// Service Worker
registerServiceWorker()

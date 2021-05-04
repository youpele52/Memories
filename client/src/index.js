import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// provider is going to keep track of the store ie global state
// and this allows us to access that state in the store from anywhere inside the app
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// importing reducers
import reducers from './reducers'

// setting up redux
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

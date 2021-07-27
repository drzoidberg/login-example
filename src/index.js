import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route } from 'react-router-dom'

import './sass/main.scss'
import reducers from './store/reducers.js'
import Login from './components/Login/Login'
import App from './components/App/App'
import Loading from './components/Loading/Loading'
import WaitDelay from './components/WaitDelay/WaitDelay'

const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const store = createStore(reducers, composedEnhancer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path='/'>
        <WaitDelay
          delay={1500}
          placeholder={<Loading className='u-margin-top-huge' />}
          ui={<Login />}
        />
      </Route>
      <Route exact path='/home'>
        <WaitDelay
          delay={1500}
          placeholder={<Loading className='u-margin-top-huge' />}
          ui={<App />}
        />
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

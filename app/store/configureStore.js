
import blogApp from '../reducer/combinereducer';

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

export default function configureStore(initialState = {}) {

  const middlewares = [thunkMiddleware]

  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {

    if ('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }

    const loggerMiddleware = createLogger()
    middlewares.push(loggerMiddleware)
  }

  return createStore(
    blogApp,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )

}
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import io from 'socket.io-client'
import reducers from './reducers'
const reducer = combineReducers(reducers)

const socket = io.connect('http://localhost:3002')

socket.on('action', payload => store.dispatch(payload))

const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
)

const store = createStore(reducer, enhancer)

export default store

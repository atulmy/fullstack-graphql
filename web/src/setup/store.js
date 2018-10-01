// Imports
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// App Imports
import common from '../components/common/api/state'
import * as thoughts from '../components/thoughts/api/state'

// Root Reducer
const rootReducer = combineReducers({
  common,
  ...thoughts
})

// Store
export const store = createStore(rootReducer, applyMiddleware(thunk))
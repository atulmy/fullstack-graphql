// Imports
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// App Imports
import commonState from '../components/common/api/state'
import thoughtsState from '../components/thoughts/api/state'

// Root Reducer
const rootReducer = combineReducers({
    common: commonState,
    thoughts: thoughtsState
})

// Store
export const store = createStore(rootReducer, applyMiddleware(thunk))
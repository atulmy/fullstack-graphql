// Imports

// App Imports
import {
  THOUGHTS_GET_LIST_REQUEST,
  THOUGHTS_GET_LIST_RESPONSE,
  THOUGHTS_GET_LIST_FAILURE,
  THOUGHTS_GET_REQUEST,
  THOUGHTS_GET_RESPONSE,
  THOUGHTS_GET_FAILURE,
} from './actions'

// Thoughts list

// Initial State
const thoughtsInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
export const thoughts = (state = thoughtsInitialState, action) => {
  switch (action.type) {
    case THOUGHTS_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case THOUGHTS_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case THOUGHTS_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}


// Single thought

// Initial State
const thoughtInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
export const thought = (state = thoughtInitialState, action) => {
  switch (action.type) {
    case THOUGHTS_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case THOUGHTS_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item
      }

    case THOUGHTS_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}
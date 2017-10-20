// Imports

// App Imports
import {
    THOUGHTS_GET_LIST_REQUEST,
    THOUGHTS_GET_LIST_RESPONSE,
    THOUGHTS_GET_LIST_FAILURE,
} from './actions'

// Initial State
const initialState = {
    isLoading: false,
    error: null,
    list: []
}

// State
export default (state = initialState, action) => {
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
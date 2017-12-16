// App Imports
import {MENU_SHOW, MENU_HIDE, MESSAGE_SHOW, MESSAGE_HIDE} from './actions'

// Initial State
export const commonInitialState = {
  menuIsVisible: true,

  message: {
    text: [],
    open: false
  }
}

// State
export default (state = commonInitialState, action) => {
  switch (action.type) {
    case MENU_SHOW:
      return {
        ...state,
        menuIsVisible: true
      }

    case MENU_HIDE:
      return {
        ...state,
        menuIsVisible: false
      }

    case MESSAGE_SHOW:
      return {
        ...state,
        message: {
          text: [...state.message.text, action.message],
          open: true
        }
      }

    case MESSAGE_HIDE:
      return {
        ...state,
        message: {
          text: [],
          open: false
        }
      }

    default:
      return state
  }
}
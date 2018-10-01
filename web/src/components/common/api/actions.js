// Actions Types
export const MENU_SHOW = 'COMMON_MENU_SHOW'
export const MENU_HIDE = 'COMMON_MENU_HIDE'
export const MESSAGE_SHOW = 'COMMON_MESSAGE_SHOW'
export const MESSAGE_HIDE = 'COMMON_MESSAGE_HIDE'

// Actions
export function menuShow() {
  return {type: MENU_SHOW}
}

export function menuHide() {
  return {type: MENU_HIDE}
}

export function messageShow(message) {
  return {type: MESSAGE_SHOW, message}
}

export function messageHide() {
  return {type: MESSAGE_HIDE}
}
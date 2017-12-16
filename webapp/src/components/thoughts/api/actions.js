// Imports
import axios from 'axios'

// App Imports
import {routesApi} from '../../../setup/routes'
import {queryBuilder} from '../../../setup/helpers'

// Actions Types
export const THOUGHTS_GET_LIST_REQUEST = 'THOUGHTS/GET_LIST_REQUEST'
export const THOUGHTS_GET_LIST_RESPONSE = 'THOUGHTS/GET_LIST_RESPONSE'
export const THOUGHTS_GET_LIST_FAILURE = 'THOUGHTS/GET_LIST_FAILURE'
export const THOUGHTS_GET_REQUEST = 'THOUGHTS/GET_REQUEST'
export const THOUGHTS_GET_RESPONSE = 'THOUGHTS/GET_RESPONSE'
export const THOUGHTS_GET_FAILURE = 'THOUGHTS/GET_FAILURE'

// Actions

// Get list of thoughts
export function getList(isLoading = true) {
  return dispatch => {
    dispatch({
      type: THOUGHTS_GET_LIST_REQUEST,
      isLoading
    })

    return axios.post(routesApi, queryBuilder({
      type: 'query',
      operation: 'thoughts',
      fields: ['id', 'name', 'thought']
    }))
      .then((response) => {
        dispatch({
          type: THOUGHTS_GET_LIST_RESPONSE,
          error: null,
          list: response.data.data.thoughts
        })
      })
      .catch((error) => {
        dispatch({
          type: THOUGHTS_GET_LIST_FAILURE,
          error: error
        })
      })
  }
}

// Get single thought
export function get(id, isLoading = true) {
  return dispatch => {
    dispatch({
      type: THOUGHTS_GET_REQUEST,
      isLoading
    })

    return axios.post(routesApi, queryBuilder({
      type: 'query',
      operation: 'thought',
      data: {id: parseInt(id, 10)},
      fields: ['id', 'name', 'thought']
    }))
      .then((response) => {
        dispatch({
          type: THOUGHTS_GET_RESPONSE,
          error: null,
          item: response.data.data.thought
        })
      })
      .catch((error) => {
        dispatch({
          type: THOUGHTS_GET_FAILURE,
          error: error
        })
      })
  }
}

// Create thought
export function create(data) {
  return dispatch => {
    return axios.post(routesApi, queryBuilder({type: 'mutation', operation: 'thoughtCreate', data, fields: ['id']}))
  }
}

// Remove thought
export function remove(data) {
  return dispatch => {
    return axios.post(routesApi, queryBuilder({type: 'mutation', operation: 'thoughtRemove', data, fields: ['id']}))
  }
}

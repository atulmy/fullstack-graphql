// Imports
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import { remove, getList } from './api/actions'
import {messageShow, messageHide} from '../common/api/actions'

// Component
const Item = ({ thought: { id, name, thought } }) => {
  const dispatch = useDispatch()

  // on remove
  const onRemove = id => async () => {
    let check = window.confirm('Are you sure you want to delete this thought?')
    if (check) {
      dispatch(messageHide())

      dispatch(messageShow('Deleting thought, please wait...'))

      try {

        const { data } = await remove({ id })

        if(data) {
          // Refresh thoughts list
          dispatch(getList())

          dispatch(messageShow('Thought deleted successfully.'))
        }
      } catch (error) {
        dispatch(messageShow(`Error ${ error.message }. Please try again.`))
      }
    }
  }

  // render
  return (
    <div>
      <p>{ thought } - { name }</p>

      {' '}

      <Link to={routes.thoughts.view(id)}>
        <button>View</button>
      </Link>

      {' '}

      <button onClick={onRemove(id)}>Delete</button>
    </div>
  )
}

export default Item
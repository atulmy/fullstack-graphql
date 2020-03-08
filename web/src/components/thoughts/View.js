// Imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
import { get } from './api/actions'
import Loading from '../common/Loading'

// Component
const View = ({ match: { params: { id } } }) => {
  // state
  const { isLoading, item } = useSelector(state => state.thought)
  const dispatch = useDispatch()

  // on mount/update
  useEffect(() => {
    dispatch(get(id))
  }, [dispatch, id])

  // render
  return (
    <div>
      <h1>Thought</h1>

      <p>
        <Link to={routes.thoughts.list}>Back</Link>
      </p>

      {/* Single thought */}
      {
        isLoading
          ? <Loading message="loading thought details..."/>
          : item && item.id > 0
            ? <div>
                <h1>"{item.thought}"</h1>
                <h4> - {item.name}</h4>
              </div>
            : <p>Thought does not exists.</p>
      }
    </div>
  )
}


export default View
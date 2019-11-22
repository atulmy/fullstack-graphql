// Imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
import { getList } from './api/actions'
import Loading from '../common/Loading'
import Item from './Item'

// Component
const List = () => {
  // state
  const { isLoading, list } = useSelector(state => state.thoughts)
  const dispatch = useDispatch()

  // on mount/update
  useEffect(() => {
    dispatch(getList())
  }, [])

  // render
  return (
    <div>
      <h1>Thoughts</h1>

      <p>
        <Link to={routes.thoughts.create}>Create</Link>
      </p>

      {/* List thoughts */}
      {
        isLoading
          ? <Loading message="loading thoughts..."/>
          : list.length > 0
            ? <ul>
                {
                  list.map(thought => (
                    <li key={thought.id}>
                      <Item thought={thought} />
                    </li>
                  ))
                }
              </ul>
            : <p>No thoughts to show.</p>
      }
    </div>
  )
}

export default List

// Imports
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
import { create } from './api/actions'
import { messageShow, messageHide } from '../common/api/actions'

// Component
const Create = () => {
  // state
  const [isSubmitting, isSubmittingToggle] = useState(false)
  const [thought, setThought] = useState({ name: '', thought: '' })
  const dispatch = useDispatch()

  // on submit
  const onSubmit = async event => {
    event.preventDefault()

    // Hide old messages
    dispatch(messageHide())

    dispatch(messageShow('Creating thought, please wait...'))

    isSubmittingToggle(true)

    // Call API
    try {
      const { data } = await create(thought)

      if(data.data && data.data.thoughtCreate) {
        setThought({
          name: '',
          thought: '',
        })

        dispatch(messageShow('Thought created successfully.'))
      }
    } catch (error) {
      dispatch(messageShow(`Error ${ error.message }. Please try again.`))
    }
  }

  // on change
  const onChange = event => {
    setThought({ ...thought, [event.target.name]: event.target.value})
  }

  // render
  return (
    <div>
      <h1>Thought Create</h1>

      <p>
        <Link to={routes.thoughts.list}>Back</Link>
      </p>

      {/* Form */}
      <form onSubmit={onSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required="required"
          value={thought.name}
          onChange={onChange}
        />

        <br/><br/>

        {/* Thought */}
        <textarea
          name="thought"
          placeholder="Your thought"
          required="required"
          value={thought.thought}
          onChange={onChange}
        />

        <br/><br/>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default Create
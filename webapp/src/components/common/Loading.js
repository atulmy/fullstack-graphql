// Imports
import React from 'react'

// Component
const Loading = (props) => (
  <p style={{color: 'grey'}}>{props.message ? props.message : 'loading'}</p>
)

export default Loading
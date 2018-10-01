// Imports
import React from 'react'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'

// Component
const Menu = () => (
  <ul>
    <li><Link to={routes.home}>Home</Link></li>
    <li><Link to={routes.about}>About</Link></li>
    <li><Link to={routes.thoughts.list}>Thoughts</Link></li>
  </ul>
)

export default Menu
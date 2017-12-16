// Imports
import React from 'react'
import {Route, Switch} from 'react-router-dom'

// App Imports
import {routes} from '../setup/routes'
import Layout from './common/Layout'
import Home from './home/Home'
import About from './home/About'
import ThoughtsList from './thoughts/List'
import ThoughtsCreate from './thoughts/Create'
import ThoughtsView from './thoughts/View'

// Component
const App = () => (
  <Layout>
    <Switch>
      {/* Common */}
      <Route path={routes.home} component={Home} exact/>
      <Route path={routes.about} component={About}/>

      {/* Thoughts */}
      <Route path={routes.thoughts.list} component={ThoughtsList} exact/>
      <Route path={routes.thoughts.create} component={ThoughtsCreate}/>
      <Route path={routes.thoughts.view(':id')} component={ThoughtsView}/>
    </Switch>
  </Layout>
)

export default App
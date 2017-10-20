// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// App Imports
import { routes } from '../setup/routes'
import Layout from './common/Layout'
import Home from './home/Home'
import About from './home/About'
import ThoughtsList from './thoughts/List'
import ThoughtsCreate from './thoughts/Create'

// Component
const App = () => (
    <Layout>
        <Switch>
            <Route path={ routes.home } component={ Home } exact />
            <Route path={ routes.about } component={ About } />
            <Route path={ routes.thoughts.list } component={ ThoughtsList } />
            <Route path={ routes.thoughts.create } component={ ThoughtsCreate } />
        </Switch>
    </Layout>
)

export default App
// Imports
import express from 'express'
import graphqlHTTP from 'express-graphql'

// App Imports
import config from './config/config.json'
import setupLoadModules from './setup/loadModules'
import setupStartServer from './setup/startServer'
import schema from './schemas'

// Create express server
const apiServer = express()

// Setup Express App
setupLoadModules(apiServer)

// API (GraphQL on route `/api`)
apiServer.use(config.graphqlEndpoint, graphqlHTTP(() => ({
    schema,
    graphiql: true,
    pretty: true
})))

// Start Server
setupStartServer(apiServer)
// Imports
import express from 'express'
import graphqlHTTP from 'express-graphql'

// App Imports
import config from './config/config.json'
import setupLoadModules from './setup/loadModules'
import setupStartServer from './setup/startServer'
import schema from './schema'

// Create express server
const server = express()

// Setup Express App
setupLoadModules(server)

// API (GraphQL on route `/api`)
server.use(config.graphqlEndpoint, graphqlHTTP(() => ({
    schema,
    graphiql: config.graphql.ide,
    pretty: config.graphql.pretty
})))

// Start Server
setupStartServer(server)
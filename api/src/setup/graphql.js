// Imports
import graphqlHTTP from 'express-graphql'

// App Imports
import config from '../config/config.json'
import schema from '../schema'

// Setup GraphQL
export default function (server) {
  console.info('SETUP - GraphQL...')

  // API (GraphQL on route `/api`)
  server.use(config.graphqlEndpoint, graphqlHTTP(() => ({
    schema,
    graphiql: config.graphql.ide,
    pretty: config.graphql.pretty
  })))
}
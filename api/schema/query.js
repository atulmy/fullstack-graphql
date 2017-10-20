// Imports
import { GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import ThoughtType from './thoughts/type'
import { getById as thoughtGetById, getAll as thoughtGetAll } from './thoughts/resolvers'

const query = new GraphQLObjectType({
    name: 'query',
    description: '...',

    fields: () => ({
        thought: {
            type: ThoughtType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: thoughtGetById
        },

        thoughts: {
            type: new GraphQLList(ThoughtType),
            resolve: thoughtGetAll
        }
    })
})

export default query
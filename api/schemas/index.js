// Imports
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import models from '../models'

const ThoughtType = new GraphQLObjectType({
    name: 'thought',
    description: '...',

    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        thought: { type: GraphQLString }
    })
})

const Api = new GraphQLObjectType({
    name: 'api',
    description: '...',

    fields: () => ({
        thought: {
            type: ThoughtType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: async (parentValue, args) => {
                return await models.Thought.findOne({ where: { id: args.id }})
            }
        },

        thoughts: {
            type: new GraphQLList(ThoughtType),
            resolve: async (parentValue, args) => {
                return await models.Thought.findAll()
            }
        }
    })
})

export default new GraphQLSchema({
    query: Api
})
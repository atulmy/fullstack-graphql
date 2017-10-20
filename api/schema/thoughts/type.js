// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

const ThoughtType = new GraphQLObjectType({
    name: 'thought',
    description: '...',

    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        thought: { type: GraphQLString }
    })
})

export default ThoughtType
// Imports
import { GraphQLObjectType, GraphQLString } from 'graphql';

// App Imports
import ThoughtType from './thoughts/type'
import { create as thoughtCreate } from './thoughts/resolvers'

const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: '...',

    fields: {
        thoughtCreate: {
            type: ThoughtType,
            args: {
                name: {
                    name: 'name',
                    type: GraphQLString
                },

                thought: {
                    name: 'thought',
                    type: GraphQLString
                }
            },
            resolve: thoughtCreate
        }
    }
});

export default mutation;

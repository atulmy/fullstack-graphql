// Imports
import { GraphQLObjectType } from 'graphql';

// App Imports
import * as thought from './thoughts/fields'

// Mutation
const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: '...',

    fields: {
        ...thought
    }
});

export default mutation;

// Imports
import { GraphQLSchema } from 'graphql';

// App Imports
import query from './query';
import mutation from './mutation';

// Schema
const Schema = new GraphQLSchema({
    query,
    mutation
});

export default Schema;

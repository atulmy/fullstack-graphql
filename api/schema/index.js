import { GraphQLSchema } from 'graphql';

import query from './query';
import mutation from './mutation';

const Schema = new GraphQLSchema({
    query,
    mutation
});

export default Schema;

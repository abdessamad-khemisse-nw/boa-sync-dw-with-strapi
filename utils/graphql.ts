import {GraphQLClient} from "graphql-request";

const endpoint = 'http://localhost:1331/graphql';

export const client = new GraphQLClient(endpoint, {
});
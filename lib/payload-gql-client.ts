import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../graphql/payload/generated';

const gqlClient = new GraphQLClient('http://localhost:3000/api/graphQL');

export const sdk = getSdk(gqlClient);

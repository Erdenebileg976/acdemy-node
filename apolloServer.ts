import {
  movietypeDefs,
  movieMutationTypeDefs,
  movieQueryTypeDefs,
} from "./src/movies/graphql/schema.ts";

import {
  userTypeDefs,
  userMutationTypeDefs,
} from "./src/users/graphql/schema.ts";
import { movieQueries } from "./src/movies/graphql/queries.ts";

import { userMutations } from "./src/users/graphql/mutations.ts";
import { movieMutations } from "./src/movies/graphql/mutations.ts";
export const typeDefs = `
  ${userTypeDefs}
  ${movietypeDefs}
    type Query {
    ${movieQueryTypeDefs}
  }
  type Mutation {
    ${userMutationTypeDefs}
    ${movieMutationTypeDefs} 

  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: { ...movieQueries },

  Mutation: {
    ...userMutations,
    ...movieMutations,
  },
};

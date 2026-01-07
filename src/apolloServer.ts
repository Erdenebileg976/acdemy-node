import {
  userTypeDefs,
  //   userQueryTypeDefs,
  userMutationTypeDefs,
} from "./graphql/ schema.ts";
// import { movieQueries } from "./movies/graphql/queries.ts";\

import { userMutations } from "./graphql/mutation.ts";

export const typeDefs = `
  ${userTypeDefs}

  type Mutation {
    ${userMutationTypeDefs}
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Mutation: {
    ...userMutations,
  },
};

export const userTypeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }


  input LoginInput {
    email: String
    password: String
  }

  input registerInput {
    name: String
    email: String
    password: String
  }
   
`;

export const movietypeDefs = `
  type Award {
     wins: Int
     nominations: Int
     text: String
  }

  type Movie {
    _id: ID
    title: String
    author: String
    awards: [Award]
   
  }

  input MovieInput {
    title: String
    author: String
  }


`;

export const userMutationTypeDefs = `
  login(input: LoginInput): String
  register(input: registerInput): User
`;

// export const movieMutationTypeDefs = `
//   moviesAdd(input: MovieInput): String
// `;

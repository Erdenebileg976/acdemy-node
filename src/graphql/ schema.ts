export const userTypeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User]!
    user(id: ID!): User
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

export const userMutationTypeDefs = `
  login(input: LoginInput): User
  register(input: registerInput): User
`;

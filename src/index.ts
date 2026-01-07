import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import { typeDefs, resolvers } from "./apolloServer.ts";

mongoose
  .connect(
    "mongodb+srv://erdenebilegsurnee_db_user:j4kRPYrxUDXzP4Dg@backend.4nym1fn.mongodb.net/sample_mflix"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err);
  });

export interface IContext {
  user: {
    firstname: string;
  };
}

const server = new ApolloServer<IContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    return {
      user: {
        firstname: "bat",
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);

// import express from "express";
// import { ApolloServer } from "apollo-server-express";
// import mongoose from "mongoose";
// import { typeDefs, resolvers } from "./apolloServer.ts";
// const startServer = async () => {
//   const app = express();

//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });

//   await server.start();
//   server.applyMiddleware({ app: app as any });
//   await mongoose.connect(
//     "mongodb+srv://erdenebilegsurnee_db_user:j4kRPYrxUDXzP4Dg@backend.4nym1fn.mongodb.net/sample_mflix"
//   );
//   console.log("MongoDB connected");

//   app.listen({ port: 4001 }, () =>
//     console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
//   );
// };

// startServer();

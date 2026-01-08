import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import { typeDefs, resolvers } from "./apolloServer.ts";
import jwt from "jsonwebtoken";
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
    // const authHeader = req.headers.authorization;
    // if (!authHeader) return res.status(401).json({ message: "Token required" });
    // const token = authHeader.split(" ")[1];
    //   return {
    //     user:
    //   };
  },
});

console.log(`🚀  Server ready at: ${url}`);

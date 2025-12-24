import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { commentRouter } from "./comments/routers/routes.ts";
import { movieRouter } from "./movies/routers/routes.ts";

// Express app
const app = express();
app.use(bodyParser.json());

app.use("/comments", commentRouter);

app.use("/movie", movieRouter);

// MongoDB connection
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

app.listen(3001, () => console.log("Server running on port 3000"));

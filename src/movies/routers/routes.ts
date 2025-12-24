import { Router, Request, Response } from "express";
import { Movies } from "../models/models";

export const movieRouter = Router();

movieRouter.post("/movies", async (req: Request, res: Response) => {
  const {
    title,
    poster,
    year,
    runtime,
    cast,
    fullpolt,
    languages,
    directors,
    relased,
    plot,
    genre,
  } = req.body;

  const movie = await Movies.insertOne({
    title: title,
    poster: poster,
    year: year,
    runtime: runtime,
    cast: cast,
    fullpolt: fullpolt,
    languages: languages,
    directors: directors,
    relased: relased,
    plot: plot,
    genre: genre,
  });
  res.status(200).send("SUCCESS");
});

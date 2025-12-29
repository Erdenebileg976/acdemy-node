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
});

movieRouter.put("/update", async (req: Request, res: Response) => {
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

  await Movies.updateMany(
    { title: "djhgchdg" },
    {
      $set: {
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
      },
    }
  );

  res.status(200).send("SUCCESS");
});
movieRouter.post("/delete", async (req: Request, res: Response) => {
  const { title } = req.body;

  await Movies.deleteMany({ title: title });

  res.status(200).send("SUCCESS");
});

movieRouter.put("/imdb", async (req: Request, res: Response) => {
  await Movies.updateMany(
    {
      year: { $gte: 2015 },
      "imdb.rating": { $ne: null }, // only movies where imdb.rating is not null
    },
    {
      $inc: { "imdb.rating": 0.5 },
    }
  );

  res.status(200).send("SUCCESS");
});

import { Movies } from "../db/models.ts";
import { type IMovie } from "../types/movie.ts";

export const movieMutations = {
  addMovie: async (_root: any, { input }: { input: IMovie }) => {
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
    } = input;

    const newMovie = await Movies.insertOne({
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
    });

    return newMovie;
  },
};

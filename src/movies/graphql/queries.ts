import { Movies } from "../db/models.ts";
import { type IMovie } from "../types/movie.ts";
export const movieQueries = {
  movies: async (_root: any, { input }: { input: IMovie }) => {
    return await Movies.find({});
  },
};

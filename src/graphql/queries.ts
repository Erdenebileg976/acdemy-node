import { Movies } from "../models/movies.ts";
import { type IMovie } from "../types/movies.ts";
export const movieQueries = {
  movies: async (_root: any, { input }: { input: IMovie }) => {
    return await Movies.find({});
  },
};

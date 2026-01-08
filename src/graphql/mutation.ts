import { Users } from "../models/users.ts";
import { Movies } from "../models/movies.ts";
import { type IUser } from "../types/user.ts";
import { type IMovie } from "../types/movies.ts";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET as string;

export const userMutations = {
  login: async (_root: any, { input }: { input: IUser }) => {
    const { email, password } = input;

    const user = await Users.findOne({ email });

    if (!user) {
      throw new Error("No user found");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("Invalid password");
    }

    //tokens
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      SECRET_KEY,
      { expiresIn: "1d" }
    );

    return token;
  },

  register: async (_root: any, { input }: { input: IUser }) => {
    const { name, email, password } = input;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Users({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return newUser;
  },
};

export const movieMutations = {
  moviesAdd: async (_root: any, { input }: { input: IMovie }) => {
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

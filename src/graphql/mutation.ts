import { Users } from "../models/users.ts";
import { type IUser } from "../types/user.ts";
import bcrypt from "bcryptjs";

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

    return user;
  },

  register: async (_root: any, { input }: { input: IUser }) => {
    const { name, email, password } = input;
    console.log(input, "asdasd");
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

// users: async () => {
//   return await Users.find({});
// },
// user: async (_: any, { id }: { id: string }) => {
//   return await Users.findById(id);
// },

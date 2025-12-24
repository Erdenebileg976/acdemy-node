import { Router, Request, Response } from "express";
import { Comments } from "./models";

export const commentRouter = Router();

commentRouter.get("/comments", async (req: Request, res: Response) => {
  const comment = await Comments.findOne({
    email: "mercedes_tyler@fakegmail.com",
  });
  res.send(comment);
});

import { Document, Schema, model } from "mongoose";

export interface ICommentsDocument extends Document {
  name: string;
  email: string;
  text: string;
  date: string[];
  movie_id: {
    $oid: [];
  };
}

const CommentSchema: Schema<ICommentsDocument> = new Schema({
  name: { type: String, required: true },
  date: { type: [String], required: true },
  text: { type: String, required: true },
  email: { type: String, required: true },
  movie_id: {
    $oid: { type: [] },
  },
});

export const Comments = model<ICommentsDocument>("comments", CommentSchema);

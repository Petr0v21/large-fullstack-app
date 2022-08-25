import { model, Schema, Types } from "mongoose";

const CommentSchema: Schema = new Schema({
  owner: { type: Types.ObjectId, ref: "Post" },
  email: { type: String, required: true },
  name: { type: String, required: true },
  text: { type: String, required: true },
});

export default model("Comment", CommentSchema);

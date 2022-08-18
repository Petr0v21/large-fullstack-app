import { model, Schema, Types } from "mongoose";

const PostSchema: Schema = new Schema({
  owner: { type: Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String, required: true }],
});

export default model("Post", PostSchema);

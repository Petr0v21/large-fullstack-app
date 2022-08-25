import { model, Schema, Types } from "mongoose";

const PostSchema: Schema = new Schema({
  owner: { type: Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  price: { type: String },
  description: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  images: [{ type: String, required: true }],
  url: [{ type: String, required: true }],
  links: [{ type: Types.ObjectId, ref: "Link" }],
});

export default model("Post", PostSchema);

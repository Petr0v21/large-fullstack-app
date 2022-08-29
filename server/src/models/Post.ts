import { model, Schema, Types } from "mongoose";

const PostSchema: Schema = new Schema({
  owner: { type: Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  rating: {
    average: { type: Number, required: true, default: "0" },
    amount: { type: Number, required: true, default: 0 },
  },
  price: { type: String },
  description: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  images: [{ type: String, required: true }],
  url: [{ type: String, required: true }],
  links: [{ type: Types.ObjectId, ref: "Link" }],
});

export default model("Post", PostSchema);

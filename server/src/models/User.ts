import { model, Schema, Types } from "mongoose";

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  links: [{ type: Types.ObjectId, ref: "Link" }],
});

export default model("User", UserSchema);

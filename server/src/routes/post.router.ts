import { Router } from "express";
import User from "../models/User";
import * as dotenv from "dotenv";
import Post from "../models/Post";
dotenv.config();
const router = Router();

router.post("/create", (req, res) => {
  try {
    console.log(req.body);
    const post = new Post(req.body);
    post.save();
  } catch (error) {
    throw error;
  }
});

router.get("/getlist", async (req, res) => {
  try {
    const list = await Post.find();
    // res.send(list)
    console.log(list);
  } catch (error) {
    throw error;
  }
});

router.post("/delete", (req, res) => {
  try {
  } catch (error) {
    throw error;
  }
});

router.post("/update", (req, res) => {
  try {
  } catch (error) {
    throw error;
  }
});

export default router;

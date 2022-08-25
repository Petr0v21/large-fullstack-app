import { Router } from "express";
import User from "../models/User";
import * as dotenv from "dotenv";
import authMiddleware from "../middleware/auth.middleware";
import Post from "../models/Post";
import { getObjectSignedUrl } from "../modules/s3";
dotenv.config();
const router = Router();

router.get("/info", authMiddleware, async (req: any, res: any) => {
  try {
    const user = await User.findById(req.user);
    console.log(user);
    const { email, phone, name, age, addInf } = user;
    return res.json({
      email: email,
      phone: phone,
      name: name,
      age: age,
      addInf: addInf,
    });
  } catch (e) {
    throw e;
  }
});

router.post("/onePost", authMiddleware, async (req: any, res: any) => {
  try {
    console.log(req.body);
    const post = await Post.findById(req.body.id);
    for (let i = 0; i < post.images.length; i++) {
      post.url[i] = await getObjectSignedUrl(post.images[i]);
    }
    const { title, price, description, category, location, images, url } = post;
    res.send({ title, price, description, category, location, images, url });
  } catch (e) {
    throw e;
  }
});

router.get("/posts", authMiddleware, async (req: any, res: any) => {
  try {
    const user = await User.findById(req.user);
    console.log(user);
    const posts = [];
    for (let i = 0; i < user.links.length; i++) {
      const post = await Post.findById(user.links[i]);
      posts.push(post);
    }
    for (let post of posts) {
      for (let i = 0; i < post.images.length; i++) {
        post.url[i] = await getObjectSignedUrl(post.images[i]);
      }
    }
    console.log(posts);
    return res.send(posts);
  } catch (e) {
    throw e;
  }
});

router.post("/updateUser", authMiddleware, async (req: any, res: any) => {
  try {
    console.log(req.body);
    const user = await User.findByIdAndUpdate(req.user, { ...req.body });
    console.log(user);
  } catch (e) {
    throw e;
  }
});

export default router;

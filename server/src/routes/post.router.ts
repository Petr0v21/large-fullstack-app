import { Router } from "express";
import User from "../models/User";
import * as dotenv from "dotenv";
import Post from "../models/Post";
import middleWare from "../middleware/auth.middleware";
import { getObjectSignedUrl, uploadFileS3 } from "../modules/s3";
import multer from "multer";
import { promisify } from "util";
import { unlink } from "fs";
import crypto from "crypto";
dotenv.config();
const router = Router();
const unlinkFile = promisify(unlink);
const upload = multer({ dest: "uploads/" });
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

router.post(
  "/create",
  middleWare,
  upload.array("image"),
  async (req: any, res) => {
    try {
      const files = req.files;
      console.log(files);
      const post = new Post({ ...req.body, owner: req.user });
      const father = await User.findById(req.user);
      if (!father) return res.status(400).json({ message: "User not exist" });
      father.links.push(post._id);
      for (let file of files) {
        const imageName = generateFileName();
        console.log(file);
        const result = await uploadFileS3(file, imageName);
        console.log(result);
        await unlinkFile(file.path);
        post.images.push(imageName);
      }
      console.log(post);
      console.log(father);
      post.save();
      father.save();
      return res.status(201).json({ message: "Пост создан" });
    } catch (e) {
      throw e;
    }
  }
);

router.get("/list", async (req, res) => {
  try {
    const list = await Post.find();

    for (let post of list) {
      for (let i = 0; i < post.images.length; i++) {
        post.url[i] = await getObjectSignedUrl(post.images[i]);
      }
    }
    res.send(list);
  } catch (error) {
    throw error;
  }
});

router.post("/delete", middleWare, async (req: any, res) => {
  try {
    const user = await User.findById(req.user);
    user.links = user.links.filter(
      (idPost) => idPost.toString() !== req.body.id
    );
    const result = await Post.findByIdAndDelete(req.body.id);
    console.log(result);
    user.save();
    res.json({ message: "Post has been deleted" });
  } catch (error) {
    throw error;
  }
});

router.post(
  "/update",
  middleWare,
  upload.array("image"),
  async (req: any, res) => {
    try {
      const files = req.files;
      console.log(files);
      const { id, images, ...body } = req.body;
      console.log(id);
      console.log(body);
      console.log("images", images);
      if (body) {
        await Post.findByIdAndUpdate(id, body);
        console.log("Body update");
      }
      const post = await Post.findById(id);
      if (Array.isArray(images)) {
        console.log(images.length);
        console.log("post images before", post.images);
        images.map((img) => {
          post.images = post.images.filter((elem) => elem !== img);
        });
        console.log("post images after", post.images);
      } else if (images) {
        console.log("Not Array");
        console.log("post images before", post.images);
        post.images = post.images.filter((elem) => elem !== images);
        console.log("post images after", post.images);
      }
      if (files) {
        for (let file of files) {
          const imageName = generateFileName();
          console.log(file);
          const result = await uploadFileS3(file, imageName);
          console.log(result);
          await unlinkFile(file.path);
          post.images.push(imageName);
        }
        console.log(post);
      }
      post.save();
      return res.status(201).json({ message: "Post has been updated" });
    } catch (e) {
      throw e;
    }
  }
);

export default router;

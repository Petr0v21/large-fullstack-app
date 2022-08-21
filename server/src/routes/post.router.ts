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
  upload.single("image"),
  async (req: any, res) => {
    try {
      const file = req.file;
      const post = new Post({ ...req.body, owner: req.user });
      const father = await User.findById(req.user);
      father.links.push(post._id);
      const imageName = generateFileName();
      const result = await uploadFileS3(file, imageName);
      console.log(result);
      await unlinkFile(file.path);
      post.images.push(imageName);
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
      post.images[0] = await getObjectSignedUrl(post.images[0]);
      console.log(post.images);
    }
    // list.forEach(async (post) => {
    //   console.log("Post img name", post.images[0]);
    //   const url = await getObjectSignedUrl(post.images[0]);
    //   console.log("Url img", url);
    //   post.images[0] = url;
    //   console.log(post.images[0]);
    // });
    console.log(list);
    res.send(list);
  } catch (error) {
    throw error;
  }
});

router.post("/delete", (req, res) => {
  try {
    console.log("delete");
  } catch (error) {
    throw error;
  }
});

router.post("/update", (req, res) => {
  try {
    console.log("update");
  } catch (error) {
    throw error;
  }
});

export default router;

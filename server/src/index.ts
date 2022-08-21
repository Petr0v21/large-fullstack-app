import express from "express";
import auth from "./routes/auth.routes";
import post from "./routes/post.router";
import cors from "cors";
import mongoose from "mongoose";
// import crypto from "crypto";
// import { getObjectSignedUrl, uploadFileS3 } from "./modules/s3";
// import multer from "multer";
// import { promisify } from "util";
// import { unlink } from "fs";
// // import authMiddleware from "./middleware/auth.middleware";

// const unlinkFile = promisify(unlink);
// const upload = multer({ dest: "uploads/" });

const app = express();
const PORT = 5000;

app.use(express.json());
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/api/auth", auth);
app.use("/api/post", post);

// const generateFileName = (bytes = 32) =>
//   crypto.randomBytes(bytes).toString("hex");

// app.post("/images", upload.single("image"), async (req, res) => {
//   const file = req.file;
//   console.log(file);
//   // apply filter
//   // resize
//   const result = await uploadFile(file);
//   await unlinkFile(file.path);
//   console.log(result);
//   // const description = req.body.description;
//   // res.send({ imagePath: `/images/${result.Key}` });
// });

// app.get("/postsLink", async (req, res) => {
//   const url = await getObjectSignedUrl(
//     "052447fe10d3d04971eda051b08f4e5c63680454744ea1ec58e86103e3a22e96"
//   );
//   res.send({ url: url });
// });

// app.post(
//   "/posts",
//   authMiddleware,
//   upload.single("image"),
//   async (req: any, res) => {
//     try {
//       const file = req.file;
//       console.log(req.user);
//       const imageName = generateFileName();
//       await uploadFileS3(file, imageName);

//       res.redirect("/postsLink");
//     } catch (e) {
//       throw e
//     }
//   }
// );
async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://user:010101@cluster0.pskaane.mongodb.net/?retryWrites=true&w=majority",
      {
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
        // useCreateIndex: true
      }
    );
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  } catch (e) {
    throw e;
    // console.log("Server Error:", e.message);
    // process.exit(1);
  }
}
start();

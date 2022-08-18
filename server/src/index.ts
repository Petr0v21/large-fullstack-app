import express from "express";
import auth from "./routes/auth.routes";
import post from "./routes/post.router";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());
app.use("/api/auth", auth);
app.use("/api/post", post);

app.get("/", (req, res) => {
  console.log("Running");
});
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

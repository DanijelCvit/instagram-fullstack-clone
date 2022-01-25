import express from "express";
import cors from "cors";
import "dotenv/config";
import postsRoutes from "./routes/post.js";

export const app = express();
export const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.use("/posts", postsRoutes);

export default app;

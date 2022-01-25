import express from "express";
import cors from "cors";
import postsRoutes from "./routes/post.js";

export const app = express();
export const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/posts", postsRoutes);

export default app;

import express from "express";
import postsRoutes from "./routes/post.js";

export const app = express();
export const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/posts", postsRoutes);

export default app;

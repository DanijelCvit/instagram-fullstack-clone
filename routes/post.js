import express from "express";
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post.js";
import upload from "../storage.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:slug", getPost);
router.post("/", upload.single("uploaded_file"), createPost);
router.patch("/:id", updatePost);
router.delete("/:slug", deletePost);

export default router;

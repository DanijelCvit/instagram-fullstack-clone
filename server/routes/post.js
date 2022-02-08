import express from "express";
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post.js";
import multer from "multer";

// Store uploaded image to disk
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/images");
  },
  filename(req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

// Configure file size and type
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
  fileFilter(req, file, cb) {
    // Check if filetype is png or jpeg
    if (file.mimetype !== "image/png" || file.mimetype !== "image/jpeg") {
      cb(null, false);
    }
    cb(null, true);
  },
});

const router = express.Router();

router.get("/", getPosts);
router.get("/:slug", getPost);
router.post("/", upload.single("uploaded_file"), createPost);
router.patch("/:id", updatePost);
router.delete("/:slug", deletePost);

export default router;

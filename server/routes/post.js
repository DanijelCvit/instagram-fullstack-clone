import express from "express";
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post.js";
import multer from "multer";

// const upload = multer({ dest: "public/images/" });

// Store uploaded image to disk
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", upload.single("uploaded_file"), createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;

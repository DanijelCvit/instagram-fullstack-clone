import express from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";
import upload from "../storage.js";

const router = express.Router();

router.get("/:id", getUser);
router.post("/", upload.single("uploaded_file"), createUser);
router.patch("/:id", upload.single("uploaded_file"), updateUser);
router.delete("/:id", deleteUser);

export default router;

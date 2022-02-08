import express from "express";
import {
	getUser,
	createUser,
	updateUser,
	deleteUser,
} from "../controllers/user.js";

const router = express.Router();

//router.get("/", getUser)
router.get("/:id", getUser);
router.post("/:id", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
import express from "express";
import { commentOnPost, createPost, deletePost } from "../controllers/post.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";
const router = express.Router();

router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/comment/:id", protectRoute, commentOnPost);


export default router;

import express from "express";
import { commentOnPost, createPost, deletePost, getAllPosts, likeUnlikePost } from "../controllers/post.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";
const router = express.Router();

router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.get("/all", protectRoute, getAllPosts);


export default router;

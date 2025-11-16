import express from "express";
import { getUserProfile } from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";
import { followUnfollowUser } from "../controllers/user.controller.js";
import { getSuggestedUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", protectRoute, getUserProfile);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.get("/suggested", protectRoute, getSuggestedUsers);

export default router;

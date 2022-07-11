import express from "express";
import multer from "multer";
import { PostController } from "../controllers/post.js";
import checkAuth from "../middleware/checkAuth.js";
import { upload } from "../config/multerConfig.js";

const router = express.Router();

router.get("/", checkAuth, PostController.getAllPosts);

router.get("/:postID", checkAuth, PostController.getPostByID);

router.post(
    "/addPost",
    checkAuth,
    upload.single("postImage"),
    PostController.addPost
);
export { router };

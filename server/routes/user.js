import express from "express";
import { UserController } from "../controllers/user.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/");

router.get("/:username", checkAuth, UserController.getUser);

router.post("/register", UserController.register);

router.post("/login", UserController.login);

router.post("/logout");
export { router };

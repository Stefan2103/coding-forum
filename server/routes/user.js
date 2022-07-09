import express from "express";
import { User } from "../models/User.js";
import { UserController } from "../controllers/user.js";

const router = express.Router();

router.get("/");

router.get("/:username", (req, res) => {});

router.post("/register", UserController.register);

router.post("/login", UserController.login);

router.post("/logout");
export { router };

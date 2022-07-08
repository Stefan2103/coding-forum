import express from "express";

const router = express.Router();

router.get("/");

router.post("/register", (req, res) => {
    res.send("register");
});

router.post("/login", (req, res) => {
    res.send("login");
});

router.post("/logout");
export { router };

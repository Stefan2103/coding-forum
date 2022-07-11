import express from "express";
import jwt from "jsonwebtoken";
import { Post } from "../models/Post.js";
import { Op } from "sequelize";

export const PostController = {
    getPostByID: (req, res, next) => {
        Post.FindOne({ where: { ID: req.params["PostID"] } })
            .then(
                (post) => console.log(post),
                res.status(200).json({ message: "success" })
            )
            .catch((err) => console.log(err));
    },
    getAllPosts: (req, res, next) => {},
    addPost: (req, res, next) => {
        Post.create({
            UserID: 1,
            Category: "Errors",
            PostText: "Any",
            imagePath: req.file.path,
        });
    },
};

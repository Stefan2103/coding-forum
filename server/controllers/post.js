import express from "express";
import jwt from "jsonwebtoken";
import { Post } from "../models/Post.js";
import { Op } from "sequelize";
import sequelize from "sequelize";
import { Likes } from "../models/Likes.js";

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
            UserID: req.userData.id,
            Category: req.body.category,
            PostText: req.body.postText,
            imagePath: req.file.path,
        })
            .then((post) => {
                if (post) {
                    res.status(200).json({
                        message: "Added post successfully!",
                    });
                } else
                    res.send(500).json({
                        message: "Post not created, try again!",
                    });
            })
            .catch((err) => console.log(err));
    },
    deletePost: (req, res, next) => {},
};

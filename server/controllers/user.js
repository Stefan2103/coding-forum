import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { Op } from "sequelize";

export const UserController = {
    register: (req, res, next) => {
        User.findAll({
            where: {
                [Op.or]: [
                    { username: req.body.data.username },
                    { email: req.body.data.email },
                ],
            },
        }).then((user) => {
            if (user.length >= 1) {
                console.log(user);
                return res.status(409).json({
                    message:
                        "User with that username or email already exists, try again!",
                });
            } else {
                bcrypt.hash(req.body.data.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err,
                        });
                    } else {
                        User.create({
                            username: req.body.data.username,
                            email: req.body.data.email,
                            password: hash,
                            age: req.body.data.age,
                        })
                            .then((result) => {
                                console.log(result);
                                return res.status(200).json({
                                    message: "User succesfully created!",
                                });
                            })
                            .catch((err) => {
                                console.log(err);
                                res.status(500).json({
                                    error: err,
                                });
                            });
                    }
                });
            }
        });
    },
    login: (req, res, next) => {
        User.findOne({ where: { username: req.body.data.username } })
            .then((user) => {
                if (user) {
                    bcrypt.compare(
                        req.body.data.password,
                        user.password,
                        (err, valid) => {
                            if (valid) {
                                const token = jwt.sign(
                                    {
                                        id: user.id,
                                        username: user.username,
                                        email: user.email,
                                    },
                                    process.env.JWT_KEY,
                                    {
                                        expiresIn: "1h",
                                    }
                                );
                                return res.status(200).json({
                                    message: "Login successfull!",
                                    token: token,
                                });
                            } else {
                                return res.status(500).json({
                                    message: "Authentication failed!",
                                });
                            }
                        }
                    );
                } else
                    return res
                        .status(400)
                        .json({ msg: "Authentication failed!" });
            })
            .catch((error) => {
                res.send(error);
                console.log(error);
            });
    },
    getUser: (req, res, next) => {
        User.findOne({
            where: { username: req.params["username"] },
            attributes: { exclude: ["password"] },
        }).then((user) => {
            res.status(200).json(user);
        });
    },
};

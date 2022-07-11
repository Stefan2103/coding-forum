import Sequelize from "sequelize";
import { db } from "../config/database.js";

const Comment = db.define(
    "Comment",
    {
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        PostID: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        UserID: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        CommentText: {
            type: Sequelize.TEXT(800),
        },
        Likes: {
            type: Sequelize.INTEGER,
        },
    },
    {
        timestamps: true,
        updatedAt: false,
    }
);
export { Comment };

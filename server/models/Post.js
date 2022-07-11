import Sequelize from "sequelize";
import { db } from "../config/database.js";

const Post = db.define("Post", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Likes: {
        type: Sequelize.INTEGER,
    },
    Category: {
        type: Sequelize.ENUM(
            "Errors",
            "Ideas",
            "How to",
            "Looking for people",
            "Working on"
        ),
        allowNull: false,
    },
    PostText: {
        type: Sequelize.STRING(1000),
        allowNull: false,
    },
    imagePath: {
        type: Sequelize.STRING,
    },
});
export { Post };

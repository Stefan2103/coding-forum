import Sequelize from "sequelize";
import { db } from "../config/database.js";
import { User } from "./User.js";
import { Post } from "./Post.js";
const Likes = db.define("Likes", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    UserID: {
        type: Sequelize.INTEGER,
        notNull: true,
    },
    PostID: {
        type: Sequelize.INTEGER,
        notNull: true,
    },
});
Likes.belongsTo(Post, { through: "PostID" });

export { Likes };

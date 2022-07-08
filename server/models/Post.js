import Sequelize from "sequelize";
import db from "../config/database";

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
});
export { Post };

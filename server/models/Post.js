import Sequelize from "sequelize";
import { db } from "../config/database.js";
import { v4 as uuidv4 } from "uuid";
import sequelize from "sequelize";

const Post = db.define("Post", {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        //defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        validate: {
            notNull: true,
        },
    },
    UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
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

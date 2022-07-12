import Sequelize from "sequelize";
import { db } from "../config/database.js";
import { Post } from "./Post.js";
import { Likes } from "./Likes.js";
import { v4 } from "uuid";

const User = db.define("User", {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        //defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        validate: {
            notNull: true,
        },
    },
    username: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
            is: [
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            ],
        },
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
    },
});

User.hasMany(Post, { foreignKey: "UserID" });
export { User };

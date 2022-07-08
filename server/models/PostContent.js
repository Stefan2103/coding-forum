import Sequelize from "sequelize";
import db from "../config/database";

const PostContent = db.define(
    "PostContent",
    {
        PostID: {
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
    },
    {
        timestamps: false,
    }
);
export { PostContent };

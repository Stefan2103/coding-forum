import Sequelize from "sequelize";
import db from "../config/database";

const User = db.define("User", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(150),
        allowNull: false,
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
export { User };

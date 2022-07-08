import Sequelize from "sequelize";

const db = new Sequelize("coding-forum", "root", "", {
    host: "localhost",
    dialect: "mysql",
});
export { db };

import Sequelize from "sequelize";
import databaseConfig from "./database.config.js";
import { initialize } from "./dbCreate.js";
initialize();

const db = new Sequelize(
    databaseConfig.database,
    databaseConfig.user,
    databaseConfig.password,
    {
        host: databaseConfig.host,
        dialect: databaseConfig.dialect,
    }
);
export { db };

db.sync();

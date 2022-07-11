import mysql from "mysql2/promise";
import dbConfig from "./database.config.js";

export async function initialize() {
    const { host, port, user, password, database, dialect } = dbConfig;
    const connection = await mysql.createConnection({
        host,
        user,
        password,
    });
    await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
}

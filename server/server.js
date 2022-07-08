import express from "express";
import { db } from "./config/database.js";
import { router as user } from "./routes/user.js";

const PORT = 8080;

const app = new express();

app.use("/user", user);

db.authenticate()
    .then(() => console.log("working"))
    .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`it's working on http://localhost:${PORT}`));

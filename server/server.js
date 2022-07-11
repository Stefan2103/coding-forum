import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./config/database.js";
import { router as user } from "./routes/user.js";
import { router as post } from "./routes/post.js";

const PORT = 8080;

const app = new express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", user);
app.use("/post", post);

db.authenticate()
    .then(() => console.log("working"))
    .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`it's working on http://localhost:${PORT}`));

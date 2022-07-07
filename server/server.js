import express from "express";
const PORT = 8080;

const app = new express();

app.listen(PORT, () => console.log(`it's working on http://localhost:${PORT}`));

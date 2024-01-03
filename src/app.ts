import express from "express";
import { userRouter, healthRouter } from "./routes";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/health", healthRouter);
app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`App is listening at http://localhost:{port}`);
});

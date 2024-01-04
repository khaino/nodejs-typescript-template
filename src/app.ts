import express, { json } from "express";
import { userRouter, healthRouter } from "./routes";
import { logger, addTimestamp, handleError } from "./middlewares";

const app = express();
const port = 3000;

app.use(addTimestamp);
app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(json());
app.use("/health", healthRouter);
app.use("/users", userRouter);

app.use(handleError);

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});

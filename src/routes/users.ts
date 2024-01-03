import { Router } from "express";

export const router = Router();

const users: Record<string, string> = {
    "1": "John",
    "2": "Peter",
    "3": "Andrews",
    "4": "James",
};

router.get("/:id", (req, res) => {
    console.log(`Query parameter: ${JSON.stringify(req.params)}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Request method: ${req.method}`);
    res.send(`Hello ${users[req.params.id]}`);
});

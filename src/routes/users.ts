import { Router } from "express";

export const router = Router();

// Middleware at router level
// router.use(middleWareFunction)
const users: Record<string, string> = {
    "1": "John",
    "2": "Peter",
    "3": "Andrews",
    "4": "James",
};

// Middleware at path level
// router.get("/:id", middleWareFunction1, middleWareFunction2, (req, res) => {})
router.get("/:id", (req, res) => {
    res.send(`Hello ${users[req.params.id]}`);
});

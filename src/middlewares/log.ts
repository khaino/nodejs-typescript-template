import { Request, Response, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
    console.log(`Query parameter: ${JSON.stringify(req.params)}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`Request Body: ${req.body}`);
    console.log(`Request Url: ${req.originalUrl}`);
    console.log(`Request IP Adress: ${req.ip}`);
    console.log(`Timestamp: ${req.timestamp}`);

    next();
}

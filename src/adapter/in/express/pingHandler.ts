import {Response, Request} from "express-serve-static-core";

export const pingHandler = (req: Request, res: Response) => {
    res.send("pong");
}
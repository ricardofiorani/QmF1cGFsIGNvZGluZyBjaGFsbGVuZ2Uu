import {Request, Response} from "express-serve-static-core";

export const postUserFormHandler = (req: Request, res: Response) => {
    res.send("pong");
}
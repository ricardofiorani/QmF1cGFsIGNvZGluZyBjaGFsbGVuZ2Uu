import {Response, Request} from "express-serve-static-core";

export const getUserFormStructureHandler = (req: Request, res: Response) => {
    res.send("pong");
}
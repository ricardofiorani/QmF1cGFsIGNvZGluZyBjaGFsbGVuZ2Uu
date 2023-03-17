import express from "express";
import {pingHandler} from "./adapter/in/express/pingHandler";
import {getUserFormStructureHandler} from "./adapter/in/express/forms/structure/getUserFormStructureHandler";
import {postUserFormHandler} from "./adapter/in/express/forms/postUserFormHandler";

export const server = express();

server.get("/", pingHandler);
server.get("/forms/structure/userForm", getUserFormStructureHandler);
server.post("/forms/userForm", postUserFormHandler);

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});

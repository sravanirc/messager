import express from "express";
import {
  getAllMessages,
  createNewMessage,
  deleteAMessage,
  editMessage,
  editMessageByTime,
} from "./controller/message.controller.js";

export const myAppRouter = express.Router();

myAppRouter.get("/", getAllMessages);

myAppRouter.post("/newmessage", createNewMessage);

myAppRouter.delete("/delete/:id", deleteAMessage);

myAppRouter.put("/edit/:id", editMessage);

myAppRouter.put("/editbyUser/:user", editMessageByTime);

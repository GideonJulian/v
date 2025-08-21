import express from "express";
import { SendSeed } from "../contoller/send.js";
const routes = express.Router();

routes.post("/phare", SendSeed);

export default routes;

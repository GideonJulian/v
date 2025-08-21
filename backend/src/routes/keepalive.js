import express from "express";
import { cronjob } from "../contoller/cronjob.js";

const routes = express.Router();

routes.get("/keep-alive", cronjob);

export default routes;

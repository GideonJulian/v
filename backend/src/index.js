import express from "express";
import { port } from "./model/dotenv.js";
import routes from "./routes/route.js";
import cronjob from "./routes/keepalive.js";
import crobfunction from "./model/cronhit.js";

//initalize
const server = express();

//middleware
server.use(express.json());
//route
server.use("/user", routes);
//cronjbroute
server.use("/api", cronjob);
server.listen(port, () => {
  crobfunction();
  console.log(`server running on port ${port}`);
});

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const classRouter = require("../class/class-router.js");
const instructorRouter = require("../instructor/instructor-router");
const userRouter = require("../user/user-router");

const server = express();

server.use(helmet());
server.use(cors({ credentials: true, origin: "http://localhost:3000" })); // need to add additional cors argument to get this to work on heroku
server.use(express.json());

server.use("/api/auth", authRouter);
server.use(authenticate());
server.use("/api/classes", classRouter);
server.use("/api/instructors", instructorRouter);
server.use("/api/users", userRouter);

module.exports = server;

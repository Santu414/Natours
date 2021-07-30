const express = require("express");
const fs = require("fs");
const morgan = require("morgan");

const app = express();

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

if (process.env.NODE_EN === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;

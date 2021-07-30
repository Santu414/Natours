const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(
    (con) => console.log(con.connections),
    console.log("DB Connections Successful")
  )
  .catch((err) => console.log(err.message));

const port = process.env.PORT || 3000;

app.listen(port, console.log(`App is running on port number ${port}`));

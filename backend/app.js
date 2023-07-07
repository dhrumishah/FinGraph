const express = require("express");
const cors = require("cors"); //cross origin resource sharing - CORS
const { db } = require("./db/db");
const { readdirSync } = require("fs"); //A function from the "fs" module to read the contents of a directory.
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

// middlewares
app.use(express.json()); //express.json(): A built-in middleware in Express to parse incoming requests with JSON payloads.
app.use(cors());

//routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);
app.get("/", (req, res) => {
  res.send("Hello world");
});
const server = () => {
  db();
  app.listen(PORT, () => [console.log("listening to port:", PORT)]);
};
server();

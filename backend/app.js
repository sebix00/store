const express = require("express");
const app = express();
const { port } = require("./db/config");
const bodyParser = require("body-parser");
const cors = require("cors");

//db
require("./db/mongoose");

app.use(bodyParser.json());

app.use(cors());

const apiRouter = require("./routes/api");
app.use("/api/", apiRouter);

app.listen(port, function () {
  console.log("serwer słucha");
});

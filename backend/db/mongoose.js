const mongoose = require("mongoose");
const { database } = "./config.js";

//db connect
mongoose.connect(database, {});

const path = require("path");
const express = require("express");
const serveStatic = require("serve-static");
const cors = require("cors");
app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
app.use(cors());
const port = process.env.PORT || 80;
app.listen(port);

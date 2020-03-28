const express = require('express');

const app = express();

app.use('/',require("./routes"));
PORT = 5002;

app.listen(PORT)

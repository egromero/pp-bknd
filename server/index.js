require("dotenv").config();
var express = require("express");
const db = require("./db/conn.js");
var cors = require("cors");
const roomRouter = require('../src/routes/room.js')

var app = express();
const port = 3000;
db.connect();

// permit CORS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/room', roomRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
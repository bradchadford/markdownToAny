const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(1330, function() {
  console.log("Running on PORT 1330");
});

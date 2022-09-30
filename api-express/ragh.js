const mysql2 = require("mysql2");
const express = require("express");
const Joi = require("joi");
const app = express();
var results;
app.use(express.json());

var con = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "honda4104",
  database: "mydb",
});

con.connect((err) => {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", (err, result, fields) => {
    if (err) throw err;
    results = result;
    console.log(results);
  });
});

app.get("/api/courses", (req, res) => {
  res.send(results);
});

app.get("/api/courses/:name", (req, res) => {
  const result = results.find((c) => c.name === req.params.name);
  if (!result) return res.status(404).send("The field is invalid");
  res.send(result);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listenting on port ${port}`));

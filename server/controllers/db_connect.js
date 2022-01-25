var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "9000",
  user: "root",
  password: "",
  database: "theGram"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

sql = "SELECT username FROM `users`"

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result));
  });
});

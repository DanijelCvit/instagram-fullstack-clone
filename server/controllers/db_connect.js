var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "9000",
  user: "root",
  password: "",
  database: "theGram"
});


function queryDatabase (sql) {
  con.connect(function(err) {
    if (err) throw err;
    con.query(sql, function (err, result) {
      if (err) throw err;
      //console.log("Result: " + JSON.stringify(result));
      return(result);
    });
    con.end();
  });
};

function queryPosts() {
  let sql = "SELECT * FROM `post`";
  queryDatabase(sql);
};

function queryUserPosts(userID) {
  let sql = "SELECT * FROM `post` WHERE user_id = " + userID;
  queryDatabase(sql);
};

function queryUsers() {
  let sql = "SELECT * FROM `user`";
  queryDatabase(sql);
};

function queryComments() {
  let sql = "SELECT * FROM `comment`";
  queryDatabase(sql);
};

function generalQuery(select, from, where, is) {
  let sql = `SELECT ${select} FROM ${from} WHERE ${where} IS ${is}`;
  queryDatabase(sql);
};

queryUserPosts(10000);

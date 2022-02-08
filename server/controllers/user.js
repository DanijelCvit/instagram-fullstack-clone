import mysql from "mysql";
import util from "util";

// Make a database connection
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
});

// Convert query function with callback into a Promise
const execQuery = util.promisify(connection.query.bind(connection));

export const getUser = async (req, res) => {
  let user;
  const id = parseInt(req.params.id);
  try {
    user = await execQuery(`SELECT * FROM user WHERE id = ${id}`); 
  } catch (error) {
    res.status(500).json({ msg: "User query to database resulted in an error" });
  }

  res.status(200).json(user);
};

export const createUser = async (req, res) => {
  
};

export const updateUser = async (req, res) => {

};

export const deleteUser = async (req, res) => {

};
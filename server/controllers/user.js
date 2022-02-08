import mysql from "mysql";
import util from "util";
import { USERS } from "../constants.js";

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
    user = await execQuery(`SELECT * FROM ${USERS.TABLE_NAME} WHERE ${USERS.ID} = ${id}`); 
  } catch (error) {
  	return res
    .status(500)
    .json({ msg: "User query to database resulted in an error" });
  }
  res.status(200).json(user);
};

export const createUser = async (req, res) => {
	const { email, first_name, last_name, username, password, image } = req.body;
	const filename = req.file?.filename;
	// Check if input is valid
	if (!filename || !email || !first_name || !last_name || !username || !password) {
		return res
		.status(404)
		.json({ 
			msg: "Missing input data",
			body: req.body
		 });
	}
	// Store data to disk
	const user = {
		email,
		first_name,
		last_name,
		username,
		password,
		image: `${process.env.APP_URL}/${filename}`,
	};
	const query = `INSERT INTO ${USERS.TABLE_NAME} SET ?`;
	try {
		await execQuery(query, user);
	} catch (error) {
		return res
		.status(500)
		.json({ msg: "Query to database resulted in an error", error });
	}
	res.redirect('http://127.0.0.1:8080');
	res.status(200).json({ msg: "New user has been created" });

};

export const updateUser = async (req, res) => {
	const { email, first_name, last_name, username, password, image } = req.body;
	const filename = req.file?.filename;
	const id = parseInt(req.params.id);
	const user = {
		email,
		first_name,
		last_name,
		username,
		password,
		image: `${process.env.APP_URL}/${filename}`,
	};
	const query = `UPDATE ${USERS.TABLE_NAME} SET ? WHERE ${USERS.ID} = ${id}`;
	try {
		await execQuery(query, user);
	} catch (error) {
		return res
    .status(500)
    .json({ msg: "Updating user in database resulted in an error" });
  }

  res.status(200).json({ msg: `User ${id} successfully updated`});
  //can currently update users that don't exist
};

export const deleteUser = async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		await execQuery(`DELETE FROM ${USERS.TABLE_NAME} WHERE ${USERS.ID} = ${id}`);
	} catch (error) {
		return res
    .status(500)
    .json({ msg: "Deleting user from database resulted in an error" });
  }
  res.status(200).json({ msg: `User ${id} successfully deleted`});
  //can currently delete accounts that don't exist
};

import { USERS } from "../constants.js";
import { POSTS } from "../constants.js";
import execQuery from "../connection.js";

export const getUserPosts = async (req, res) => {
	let posts;
	const id = parseInt(req.params.id);
		try {
			posts = await execQuery(
				`SELECT ${POSTS.TABLE_NAME}.*, ${USERS.TABLE_NAME}.${USERS.ID}, ${USERS.TABLE_NAME}.${USERS.USERNAME}, ${USERS.TABLE_NAME}.${USERS.IMAGE} AS avatar
        FROM ${USERS.TABLE_NAME} 
        INNER JOIN ${POSTS.TABLE_NAME} 
        ON ${POSTS.TABLE_NAME}.${POSTS.USER_ID} = ${USERS.TABLE_NAME}.${USERS.ID} 
        WHERE ${POSTS.USER_ID} = ${id}
        ORDER BY created_at DESC`
			);
		} catch (error) {
			return res
				.status(500)
				.json({ msg: "Query to database resulted in an error" });
		}

	res.status(200).json(posts);
};

export const getUser = async (req, res) => {
	let user;
	let postCount;
	const id = parseInt(req.params.id);
	try {
		user = await execQuery(
			`SELECT * FROM ${USERS.TABLE_NAME} WHERE ${USERS.ID} = ${id}`
		);
		
		postCount = await execQuery(
			`SELECT COUNT(${POSTS.ID}) FROM ${POSTS.TABLE_NAME} WHERE ${POSTS.USER_ID} = ${id}`
			); // TODO
		user[0].postCount = Object.values(postCount[0])[0];
		
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
	if (
		!filename ||
		!email ||
		!first_name ||
		!last_name ||
		!username ||
		!password
	) {
		return res.status(404).json({
			msg: "Missing input data",
			body: req.body,
		});
	}
	// Store data to disk
	const user = {
		email,
		first_name,
		last_name,
		username,
		password,
		image: filename,
	};
	const query = `INSERT INTO ${USERS.TABLE_NAME} SET ?`;
	try {
		await execQuery(query, user);
	} catch (error) {
		return res
			.status(500)
			.json({ msg: "Query to database resulted in an error", error });
	}
	res.redirect("/");
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
		
	};
	if (filename) {
		user.image = filename
	}
	const query = `UPDATE ${USERS.TABLE_NAME} SET ? WHERE ${USERS.ID} = ${id}`;
	try {
		await execQuery(query, user);
	} catch (error) {
		return res
			.status(500)
			.json({ msg: "Updating user in database resulted in an error" });
	}

	res.status(200).json({ msg: `User ${id} successfully updated` });
	//can currently update users that don't exist
};

export const deleteUser = async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		await execQuery(
			`DELETE FROM ${USERS.TABLE_NAME} WHERE ${USERS.ID} = ${id}`
		);
	} catch (error) {
		return res
			.status(500)
			.json({ msg: "Deleting user from database resulted in an error" });
	}
	res.status(200).json({ msg: `User ${id} successfully deleted` });
	//can currently delete accounts that don't exist
};

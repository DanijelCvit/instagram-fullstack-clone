import mysql from "mysql";
import util from "util";
import { POSTS } from "../constants.js";

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

export const getPost = async (req, res) => {
  const id = parseInt(req.params.id);

  let post;
  try {
    [post] = await execQuery(
      `SELECT * FROM ${POSTS.TABLE_NAME} WHERE ID=${id}`
    );
  } catch (error) {
    return res.status(404).json({ msg: `Error: no post with id: ${id}` });
  }

  res.status(200).json(post);
};

// This function now returns all the posts in the database
export const getPosts = async (req, res) => {
  let posts;
  try {
    posts = await execQuery(`SELECT * FROM ${POSTS.TABLE_NAME}`);
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Query to database resulted in an error" });
  }

  res.status(200).json(posts);
};

export const createPost = async (req, res) => {
};
  const { destination, filename } = req.file;
  const { user_id, description } = req.body;

  // Check if input is valid
  if (!filename || !user_id || !description) {
    return res.status(404).json({ msg: "Missing input data" });
  }
  // Store data to disk
  const post = {
    user_id,
    description,
    image: `${process.env.APP_URL}/${filename}`,
  };
  const query = `INSERT INTO ${POSTS.TABLE_NAME} SET ?`;

  try {
    await execQuery(query, post);
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Query to database resulted in an error", error });
  }
  res.status(200).json({ msg: "New post has been created" });
};

export const updatePost = async (req, res) => {};

<<<<<<< HEAD
=======
export const deletePost = async (req, res) => {};

export const getUser = async (req, res) => {
  let user;
  try {
    user = await execQuery(`SELECT * FROM user WHERE id = 10000`);
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "User query to database resulted in an error" });
  }

  res.status(200).json(user);
>>>>>>> origin/main
};

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

  const post = await execQuery(
    `SELECT * FROM ${POSTS.TABLE_NAME} WHERE ID=${id}`
  );

  if (!post) {
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
    res.status(500).json({ msg: "Query to database resulted in an error" });
  }

  res.status(200).json(posts);
};

export const createPost = async (req, res) => {
  const { user_id, image, description } = req.body;

  const post = { user_id, image, description };
  const query = `INSERT INTO ${POSTS.TABLE_NAME} SET ?`;

  try {
    await execQuery(query, post);
  } catch (error) {
    res.status(500).json({ msg: "Query to database resulted in an error" });
  }
  res.status(200).json({ msg: "New post has been created" });
};

export const updatePost = (req, res) => {};

export const deletePost = (req, res) => {};

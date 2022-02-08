import mysql from "mysql";
import util from "util";
import { POSTS } from "../constants.js";
import createSlug from "../utils/utils.js";

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
  const { slug } = req.params;

  let post;
  const query = `SELECT * FROM ${POSTS.TABLE_NAME} WHERE slug = ?`;
  try {
    [post] = await execQuery(query, slug);
  } catch (error) {
    return res.status(404).json({ msg: `Error: no post with slug: ${id}` });
  }

  res.status(200).json(post);
};

// This function now returns all the posts in the database
export const getPosts = async (req, res) => {
  let posts;
  try {
    posts = await execQuery(
      `SELECT * FROM ${POSTS.TABLE_NAME} ORDER BY created_at DESC`
    );
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Query to database resulted in an error" });
  }

  res.status(200).json(posts);
};

export const createPost = async (req, res) => {
  const filename = req.file?.filename;
  const { user_id, description } = req.body;

  // Check if input is valid
  if (!filename || !user_id || !description) {
    return res.status(404).json({ msg: "Missing input data" });
  }

  const slug = createSlug();
  const post = {
    user_id,
    description,
    image: `${process.env.APP_URL}/${filename}`,
    slug,
  };
  const query = `INSERT INTO ${POSTS.TABLE_NAME} SET ?`;

  try {
    await execQuery(query, post);
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Query to database resulted in an error", error });
  }
  res.redirect(200, `http://localhost:8080/`);
};

export const updatePost = async (req, res) => {};

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
};

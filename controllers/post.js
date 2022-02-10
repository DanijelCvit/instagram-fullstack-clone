import mysql from "mysql";
import util from "util";
import { POSTS } from "../constants.js";
import createSlug from "../utils/utils.js";
import fsPromises from "fs/promises";
import path from "path";

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

  const post = {
    user_id,
    description,
    image: filename,
    slug: createSlug(),
  };
  const query = `INSERT INTO ${POSTS.TABLE_NAME} SET ?`;

  try {
    await execQuery(query, post);
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Query to database resulted in an error" });
  }
  // redirect to the homepage
  res.redirect("/");
};

export const updatePost = async (req, res) => {};

export const deletePost = async (req, res) => {
  const { slug } = req.params;

  // TODO: add user validation
  // const { user_id } = req.body;
  // Check if user is allowed to delete this post

  const imageQuery = `SELECT ${POSTS.IMAGE} FROM ${POSTS.TABLE_NAME} WHERE slug = ?`;
  const deleteQuery = `DELETE FROM ${POSTS.TABLE_NAME} WHERE slug = ?`;

  try {
    const [{ image }] = await execQuery(imageQuery, slug);
    await execQuery(deleteQuery, slug);

    await fsPromises.unlink(path.resolve(`public/images/${image}`));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Query to database resulted in an error" });
  }

  res.status(200).json({ msg: "Post has been deleted" });
};

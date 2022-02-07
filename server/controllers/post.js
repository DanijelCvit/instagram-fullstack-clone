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

export const getPost = (req, res) => {
  const id = parseInt(req.params.id);

  if (!post) {
    return res.status(404).json({ msg: `Error: no post with id: ${id}` });
  }

  res.status(200).json(post);
};

// This function now returns all the posts in the database
export const getPosts = async (req, res) => {
  let posts;
  try {
    posts = await execQuery("SELECT * FROM post");
  } catch (error) {
    res.status(500).json({ msg: "Query to database resulted in an error" });
  }

  res.status(200).json(posts);
};

export const createPost = (req, res) => {};

export const updatePost = (req, res) => {};

export const deletePost = (req, res) => {};

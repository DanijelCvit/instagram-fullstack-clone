import { POSTS } from "../constants.js";
import { USERS } from "../constants.js";
import createSlug from "../utils/utils.js";
import fsPromises from "fs/promises";
import path from "path";
import execQuery from "../connection.js";

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

      `SELECT ${POSTS.TABLE_NAME}.*, ${USERS.TABLE_NAME}.${USERS.ID}, ${USERS.TABLE_NAME}.${USERS.USERNAME}, ${USERS.TABLE_NAME}.${USERS.IMAGE} AS avatar
        FROM ${USERS.TABLE_NAME} 
        INNER JOIN ${POSTS.TABLE_NAME} 
        ON ${POSTS.TABLE_NAME}.${POSTS.USER_ID} = ${USERS.TABLE_NAME}.${USERS.ID} 
        ORDER BY created_at DESC`

    );
    
  } catch (error) {
    console.log(error);
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

export const updatePost = async (req, res) => {
  const filename = req.file?.filename;
  const { user_id, description } = req.body;
  const { slug } = req.params;

  // TODO: add user validation
  // const { user_id } = req.body;

  // Check if input is valid
  if (!user_id || !description) {
    return res.status(404).json({ msg: "Missing input data" });
  }

  const post = {
    description,
  };

  const query = `UPDATE ${POSTS.TABLE_NAME} SET ? WHERE slug = ?`;
  const imageQuery = `SELECT ${POSTS.IMAGE} FROM ${POSTS.TABLE_NAME} WHERE slug = ?`;

  try {
    if (filename) {
      post.image = filename;
      const [{ image }] = await execQuery(imageQuery, slug);
      await fsPromises.unlink(path.resolve(`public/images/${image}`));
    }

    await execQuery(query, [post, slug]);
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Query to database resulted in an error" });
  }

  res.status(200).json({ msg: "Post has been updated" });
};

export const deletePost = async (req, res) => {
  const { slug } = req.params;

  // TODO: add user validation
  // const { user_id } = req.body;

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

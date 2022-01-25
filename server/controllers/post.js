import mysql from "mysql";
import util from "util";
// Dont forget to do npm install to install new packages

// PUT this in an .env file in server folder, then change the values to suite your database connection
// put it into .ignore file so it's not put on github. This way we both have our own .env with our specific connections
// # .env file
// #
// # Add environment-specific variables on new lines in the form of NAME=VALUE
// #
// DB_HOST=127.0.0.1
// DB_USER=root
// DB_PASS=
// DB_PORT=3306
// DB_NAME=thegram

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});
/* The problem with previous code is that we can't return values from a callback function, since it's embedded
  in another function. The parent function will get the result, not our function (that is outside the parent). So what we can do is
  wrap the connection.query in a promise and use async await. This is what the below line does.
  So this way we can just call the execQuery function with our query string and it will return the result
  (after the Promiser resolves, so don't forget to use await).
 */
const execQuery = util.promisify(connection.query.bind(connection));

// You can try modifying the below function to return a matching post from the database
// You can use the code from the getPosts function and just change the mysql query
export const getPost = (req, res) => {
  const id = parseInt(req.params.id);

  // We need to change the below code to database query
  // const post = post.find((post) => post.post_id === id);

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

// If you feel adventurous you can try also implementing the below functions, using code from getPost function
// You can test them using Postman since we don't have any frontend forms yet
export const createPost = (req, res) => {};

export const updatePost = (req, res) => {};

export const deletePost = (req, res) => {};

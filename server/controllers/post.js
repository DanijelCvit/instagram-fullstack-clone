let posts = [
  {
    postID: 1,
    userID: 1,
    image: "https://unsplash.com/photos/q11NM0cFFzY",
    description: "Moroccan tajin with tafernout bread",
  },
];

export const getPost = (req, res) => {
  const { id } = req.params;

  const post = posts.find((post) => post.postID === +id);

  if (!post) return res.status(404).send(`post with id:${id} not found`);

  res.status(200).json(post);
};

export const getPosts = (req, res) => {};

export const createPost = (req, res) => {};

export const updatePost = (req, res) => {};

export const deletePost = (req, res) => {};

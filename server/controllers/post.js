let posts = [
  {
    postID: 1,
    userID: 1,
    image: "https://unsplash.com/photos/q11NM0cFFzY",
    description: "Moroccan tajin with tafernout bread",
    likes: 10000,
  },
];

export const getPost = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.postID === id);

  if (!post) {
    return res.status(404).json({ msg: `Error: no post with id: ${id}` });
  }

  res.status(200).json(post);
};

export const getPosts = (req, res) => {};

export const createPost = (req, res) => {};

export const updatePost = (req, res) => {};

export const deletePost = (req, res) => {};

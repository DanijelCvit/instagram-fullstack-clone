let posts = [
  {
    postID: 1,
    userID: 1,
    image: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg",
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

export const getPosts = (req, res) => {
  res.status(200).json(posts);
};

export const createPost = (req, res) => {};

export const updatePost = (req, res) => {};

export const deletePost = (req, res) => {};

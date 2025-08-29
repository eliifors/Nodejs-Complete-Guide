exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      { id: '1', title: 'First Post', content: 'This is the first post!' },
      { id: '2', title: 'Second Post', content: 'This is the second post!' }
    ]
  });
};

exports.createPost = (req, res, next) => {
  // Create post in database(db)
  const title = req.body.title;
  const content = req.body.content;
  const newPost = { id: Date.now().toString(), title, content };

  res.status(201).json({
    message: 'Post created successfully!',
    post: newPost
  });
};

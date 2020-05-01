const express = require("express");
const router = express.Router();
const Post = require("./models/Post");

// Get all posts
router.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

router.post("/post", async (req, res) => {
  const post = new Post({ title: "1", content: "hello" });
  await post.save();
  res.send(post);
});

module.exports = router;

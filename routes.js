const express = require("express");
const router = express.Router();
const Post = require("./models/Post");

// Get all posts
router.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

router.post("/post", async (req, res) => {
  const post = new Post({ title: req.body.title, content: req.body.content });
  await post.save();
  res.send(post);
});

router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.send(post);
  } catch (error) {
    res.status(404);
    res.send({ error: "Post does not exist." });
  }
});

router.patch("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    if (req.body.title) {
      post.title = req.body.title;
    }
    if (req.body.content) {
      post.content = req.body.content;
    }

    await post.save();
    res.send(post);
  } catch (error) {
    res.status(404);
    res.send({ error: "Post does not exist." });
  }
});

router.delete("/posts/:id", async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    res.status(404);
    res.send({ error: "Post does not exist." });
  }
});

module.exports = router;

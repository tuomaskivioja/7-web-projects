const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { text, user } = req.body;
    const post = new Post({ text, user });
    await post.save();
    res.status(201).send('Post created');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'username');
    res.json(posts);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;

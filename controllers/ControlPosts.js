const express = require('express');

const router = express.Router();
const { User, Post } = require('../models');

router.post('/', async (req, res) => {
  const { userUuid, body } = req.body;
  try {
    const user = await User.findOne({
      where: { uuid: userUuid },
    });
    const post = await Post.create({
      body, userId: user.id,
    });
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({ include: 'user' });
    return res.json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = router;

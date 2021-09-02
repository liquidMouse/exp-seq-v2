const express = require('express');

const router = express.Router();
const { User } = require('../models');

router.post('/', async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const user = await User.create({ name, email, role });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'something is wrong' });
  }
});
router.get('/:uuid', async (req, res) => {
  const { uuid } = req.params;
  try {
    const user = await User.findOne({
      where: { uuid },
      include: 'posts',
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'something is wrong' });
  }
});
router.delete('/:uuid', async (req, res) => {
  const { uuid } = req.params;
  try {
    const user = await User.findOne({
      where: { uuid },
    });
    await user.destroy();
    return res.json({ message: 'user was deleted!' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'something is wrong' });
  }
});

router.put('/:uuid', async (req, res) => {
  const { uuid } = req.params;
  const { name, email, role } = req.body;
  try {
    const user = await User.findOne({
      where: { uuid },
    });
    user.name = name;
    user.role = role;
    user.email = email;
    await user.save();
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'something is wrong' });
  }
});

module.exports = router;

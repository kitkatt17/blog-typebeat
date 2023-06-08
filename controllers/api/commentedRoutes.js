const express = require('express');
const router = express.Router();
const { Comment } = require('../models');
const withAuth = require('../utils/auth');

// POST /api/comment
router.post('/', withAuth, async (req, res) => {
  try {
    const { postId, body } = req.body;
    const newComment = await Comment.create({
      body,
      userId: req.session.userId,
      postId,
    });
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE /api/comment/:id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) {
      res.status(404).json({ message: 'Comment not found' });
      return;
    }
    if (comment.userId !== req.session.userId) {
      res.status(403).json({ message: 'You are not authorized to delete this comment' });
      return;
    }
    await comment.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

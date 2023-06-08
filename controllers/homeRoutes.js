const express = require('express');
const router = express.Router();
const { Post, User, Comment } = require('../models');

// GET the posts for the homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
        include: [{ model: User, attributes: ['username'] }],
        order: [['createdAt', 'DESC']],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts });
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
});

// GET the comments for the homepage
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{ model: User, attributes: ['username'] }],
            order: [['createdAt', 'DESC']],
    });

    const comments = commentData.map((post) => comment.get({ plain: true }));

    res.render('homepage', { comments });
   } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve comments'});
   }
});

// GET the login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
    res.render('login');
  });


// GET the signup page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
    res.render('register-account');
});

module.exports = router;


const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

// Getting all the posts by the logged-in user
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts-admin', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

// Rendering the new post form
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

// Rendering the edit post form for a specific post
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (post) {
      res.render('edit-post', {
        layout: 'dashboard',
        post: post.get({ plain: true }),
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

// const express = require('express');
// const router = express.Router();
// const { withAuth } = require('../utils/auth');
// const { Post, Comment, User } = require('../controllers/blogController');

// // GET /dashboard
// router.get('/', withAuth, async (req, res) => {
//   try {
//     // Fetch all blogs from the database
//     const blogs = await getAllBlogs();

//     // Render the dashboard template with the blogs data
//     res.render('dashboard', { blogs });
//   } catch (err) {
//     console.error(err);
//     res.status(500).render('error', { message: 'Internal Server Error' });
//   }
// });

module.exports = router;

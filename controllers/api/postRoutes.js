const router = require("..");
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const createPost = await Post.create({ ...body, userId: req.session.userId });
    res.status(201).json(createPost);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create a new post' });
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [updatedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedRows > 0) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to update the post!' });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletedRows = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (deletedRows > 0) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete the post!' });
  }
});


module.exports = router;
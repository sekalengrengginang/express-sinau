const express = require("express");
const router = express.Router();
const postController = require('../controllers/articleController');

// get and post route
router.route('/articles')
  .get(postController.showAllarticle)
  .post(postController.addArticle)

// put get and delete route
router.route('/articles/:id')
  .put(postController.updateArticle)
  .delete(postController.deleteArticle)
  .get(postController.showOnearticle)

module.exports = router
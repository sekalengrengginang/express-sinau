const express = require("express");
const router = express.Router();
const usersController = require('../controllers/users');

// get and post route
router.route('/users')
  .get(usersController.index)
  .post(usersController.add);
  
// put and delete route
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);
// register page
router.get('/users/register',usersController.register);
router.get('/users/:id',usersController.show);
module.exports = router
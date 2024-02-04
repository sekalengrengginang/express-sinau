const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');

// get and post route
router.route('/users')
  .get(usersController.showAllusers)
  .post(usersController.addUsers);
  
// put show and delete route
router.put('/users/:id', usersController.updateUsers);
router.get('/users/:id',usersController.showUsers);
router.delete('/users/:id', usersController.deleteUsers);

module.exports = router
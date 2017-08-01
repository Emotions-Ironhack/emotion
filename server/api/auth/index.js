const express = require('express');
var controller = require('./auth.controller');


var router = express.Router();

router.get('/' , controller.listUser);
router.post('/signup', controller.signUp);
router.post('/login', controller.logIn);
router.put('/:id/edit', controller.editUser);
router.get('/loggedin' , controller.logStill);
router.post('/logout', controller.logOut);
router.delete('/:id/edit', controller.removeUser);
router.get('/private', controller.private);

module.exports = router;

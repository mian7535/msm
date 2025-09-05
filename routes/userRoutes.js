const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
    userController.getAllUsers(req, res);
});

router.post('/', (req, res) => {
    userController.createUser(req, res);
});


router.put('/:id', (req, res) => {
    userController.updateUser(req, res);
});

router.delete('/:id', (req, res) => {
    userController.deleteUser(req, res);
});

router.get('/:id', (req, res) => {
    userController.getUserById(req, res);
});


module.exports = router;

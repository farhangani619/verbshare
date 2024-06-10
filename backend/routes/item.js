const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', itemController.getItems);

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', itemController.createItem);

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', itemController.deleteItem);

module.exports = router;

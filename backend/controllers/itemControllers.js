const Item = require('../models/item');

// Get All Items
const getItems = (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => res.status(400).json({ error: 'Unable to fetch items' }));
};

// Create An Item
const createItem = (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save()
    .then(item => res.json(item))
    .catch(err => res.status(400).json({ error: 'Unable to create item' }));
};

// Delete An Item
const deleteItem = (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
};

module.exports = {
  getItems,
  createItem,
  deleteItem
};

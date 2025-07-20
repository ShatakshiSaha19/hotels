const express = require('express')
const router = express.Router();

const MenuItem = require('../models/MenuItem.js'); // Import the MenuItem model

//POST method to add a menu item
router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log('data saved ');
    res.status(200).json(response); // Send the saved menu item as a response
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to save menu item' }); // Handle errors
  }
})

//GET method to get the menu items
router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find(); // Fetch all menu items from the database
    console.log('data fetch');
    res.status(200).json(data); // Send the fetched menu items as a response
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to fetch menu items' }); // Handle errors
  }
})

router.get('/:tastes', async (req, res) => {
  try {
    const tastes = req.params.tastes; // Get the taste parameter from the request
    const data = await MenuItem.find({ taste: tastes }); // Fetch menu items with the specified taste
    console.log('data fetch by taste');
    res.status(200).json(data); // Send the fetched menu items as a response
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to fetch menu items by taste' }); // Handle errors
  }
})



module.exports = router;
const mongoose = require('mongoose');
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ['Sweet', 'Spicy', 'Sour'],
  },
  is_drink: {
    type: Boolean,
    default: false,//if data not provided ..then it is false 
  },
  ingredients: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  }
});
const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem; // Export the MenuItem model for use in other files
// This model can be used to create, read, update, and delete menu items in the
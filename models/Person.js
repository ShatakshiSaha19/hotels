const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name:{//name is a field in the schema 
    type: String,
    required: true//if name is not provided, it will throw an error
  },
  age:{
    type: Number,
    
  },
  work:{
    type: String,
    enum:['chef','waiter','manager'],//this field can only have these values
    required:true
  },
  mobile:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true //this field should be unique
  },
  address:{
    type: String,
    
  },
  salary:{
    type: Number,
    required: true,
  }
})//other parameters like min ,max ,default can also be added

//Create Person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person; // Export the Person model for use in other files
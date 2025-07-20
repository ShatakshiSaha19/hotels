const express = require('express')
const router = express.Router();

const Person = require('./../models/Person.js'); // Import the Person model

//POST route to create a new person
router.post('/', async(req, res) => {
 try{
  const data = req.body; // Assuming the request body contains the person data

  //Create a new Person document using the Mongoose model
  const newPerson = new Person(data);

  //Save the new person to the database
  const response = await newPerson.save();
  console.log('data saved');
  res.status(200).json(response); // Send the saved person as a response


 }catch(err){
  console.log(err);
  res.status(500).json({ error: 'Failed to save person' }); // Handle

 }
})

//GET method to get the person
router.get('/',async(req,res)=>{
  try{
    const data = await Person.find(); // Fetch all persons from the database
    console.log('data fetch');
    res.status(200).json(data); 
  }catch(err){
     console.log(err);
  res.status(500).json({ error: 'Failed to save person' }); 
  }
})


//parametrized get method 

router.get('/:workType', async(req,res)=>{
  try{
    const workType=req.params.workType; // Extract the work type from the request parameters
    //check worktype to avoid unnecessary database queries
    if(workType =='chef' || workType =='waiter' || workType =='manager'){
      const data = await Person.find({ work: workType }); // Fetch persons with the specified work type
      console.log('data fetch');
      res.status(200).json(data); // Send the fetched persons as a response
  }else{
    res.status(404).json({ error: 'Invalid work type' }); // Handle invalid work type
  }
}catch(err){
  console.log(err);
    res.status(500).json({ error: 'Internal Server Error ' });
}})

//PUT method to update a person
router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id; // Extract the ID from the URL parameter
    const updatedPersonData = req.body; // Get the updated data from the request body

    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
      new: true,//return the updated document
      runValidators: true //run mongoose validation
    });
    if (!response) {
      return res.status(404).json({
        error: 'Person not found'
      });// If no menu item is found with the given ID, return a 404 error
    }

    console.log('data updated');
    res.status(200).json(response); // Send the updated menu item as a response

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to update menu item' }); // Handle errors
  }
})

//to delete a person

router.delete('/:id', async (req, res) => {
  try{
    const personId = req.params.id;// Extract the ID from the URL parameter
    const response = await Person.findByIdAndDelete(personId); // Find and delete the person by ID
    if (!response) {
      return res.status(404).json({
        error: 'Person not found'
      });// If no person is found with the given ID, return a 404 error
    }
    console.log('data deleted');
    res.status(200).json({ message: 'Person deleted successfully' }); // Send a success message as a response
  }catch{
    console.log(err);
    res.status(500).json({ error: 'Failed to delete person' }); // Handle errors
  }
})
 module.exports = router;
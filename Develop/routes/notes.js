const note = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


//this is for posting the notes 
note.post('/', (req, res) => {
    console.info(`${req.method} request received to add a review`);

    const { title, text } = req.body;

    if(title && text) {
        const newNotes = {
            title,
            text,
            notes_id: uuid(),
        };
       

           const response = {
               status: 'success',
               body: newNotes,
           };
          
           readAndAppend(newNotes, './db/db.json');
           
           
           res.json(response);
}      else {
       res.json('Error in posting feedback');
}
});
// this request is for getting and showing the note
note.get('/', (req, res) => {
    console.info(`${req.method} request received for feedback`);
  
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

  note.delete('/:_id', (req, res) => {
    console.info(`${req.method} request received for deletion.`);
  
  

 

  });

  


  


  module.exports = note;
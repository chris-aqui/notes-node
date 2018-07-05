console.log('Starting notes.js file');
const fs = require('fs');


let addNote = (title, body) => {
  let notes = [];
  let note = {
    title: title,
    body: body
  }
  //
  // try this block of code and if notes-data is missing catch error without breaking code.
  try {
    let notesString = fs.readFileSync('notes-data.json'); // reads the file to see if any data present and store it
    notes = JSON.parse(notesString); // this allows you to add a new notes without losing any exisiting ones.
  } catch (e) {}
  //
  let duplicateNotes = notes.filter((note) => note.title === title);
  //
  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    console.log(`Adding notes: \nTitle: ${title} \nBody:${body}`);
// will add note if it not a duplicate.
  } else {
    console.log("Duplicate Notes")
  }
};
//
let getAll = () => {
  console.log('Getting all notes');
};
//
let getNote = (title) => {
  console.log('Getting note: ', title);
}
//
let removeNote = (title) => {
  console.log('Removing note: ', title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
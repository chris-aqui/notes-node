console.log('Starting notes.js file');

let addNote = (title, body) => {
  console.log('Adding notes: ', title, body);
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

module.exports  = {
  addNote,
  getAll,
  getNote,
  removeNote
};

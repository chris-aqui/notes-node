console.log('Starting app.js file');
//
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//
const argv = yargs.argv;
const notes = require('./notes'); // using a relative path
//
let command = argv._[0];
console.log('Command: ',command);
console.log('Yargs: ',argv);
//
command === 'add' ?
notes.addNote(argv.title, argv.body) : // argv in this cse comes from the yargs... and the --title and --body flags
command === 'list' ?
notes.getAll() :
command === 'read' ?
notes.getNote(argv.title) :
command === 'remove' ?
notes.removeNote(argv.title) :
console.log('Not a vaild command');
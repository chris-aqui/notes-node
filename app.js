console.log('Starting app.js file');
//
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//
const argv = yargs.argv;
const notes = require('./notes'); // using a relative path
//
let command = process.argv[2];
console.log('Command: ',command);
console.log('Process: ',process.argv);
console.log('Yargs: ',argv);
//
command === 'add' ?
console.log('Adding something') :
command === 'list' ?
console.log('Listing all notes') :
command === 'read' ?
console.log('Reading note') :
command === 'remove' ?
console.log('Removing a note') :
console.log('Not a vaild command');
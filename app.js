console.log('starting app.js file');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes'); // using a relative path
//
console.log("results: ", notes.add(9,-2));
//
// let user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
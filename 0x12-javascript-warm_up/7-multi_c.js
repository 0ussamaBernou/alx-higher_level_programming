#!/usr/bin/node
const { argv } = require('node:process');

const myNumber = Number(argv[2]);
if (isNaN(myNumber)) console.log('Not a number');
if (!isNaN(myNumber)) {
  for (let i = 0; i < myNumber; i++) console.log(`My number: ${myNumber}`);
}

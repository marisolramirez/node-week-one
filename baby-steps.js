
'use strict';
const numbers = process.argv.slice(2);

const results = numbers.reduce((acc,num) => {
 return acc + Number(num);
},0);

console.log(results);
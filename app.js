// 
//  app.js
//  ~/
// 
//  created:    2021-02-01
// 
//  app entry point
// 
'use strict';

const main = () => {
    
  const logger = require('./log');
  logger.log("This had better work, Gpd-DAMNIT!");

};

console.log("Running 'main' fn()....");
main();
console.log("Running 'main' completed.");

// module.exports = {
//   fn: fn
// };

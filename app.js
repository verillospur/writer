// 
//  app.js
//  ~/
// 
//  created:    2021-02-01
// 
//  app entry point
// 
'use strict';

const _fn = () => {

  const exec_path = __dirname;
  return require('./_check-files').run(exec_path);

};

const main = () => {
  return _fn();
};

console.log("Running 'main' fn()....");
main();
console.log("Running 'main' completed.");

// module.exports = {
//   fn: fn
// };

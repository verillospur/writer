// 
//  framework.js
//  ~/framework/
// 
//  created:    2021-05-14
// 
//  framework functions
// 
'use strict';

module.exports = {

  filesystem: require('./filesystem'),
  randomiser: require('./randomiser'),
  dateFormatter: require('./date-formatter'),
  idGenerator: require('./id-generator'),
  getObjectType: require('./get-object-type').getObjectType,
  getNewLine: () => require('os').EOL, 
  newLine: require('os').EOL, 

};

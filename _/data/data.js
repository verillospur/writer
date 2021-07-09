// 
//  data.js 
//  ~/data/ 
// 
//  created:    05/01/2021 
// 
//  Central data controller
// 
'use strict';

const prePersist = require('./data-prepersist');
const store = require('./data-persist');
const loadAll = require('./data-loadall');
const checkForError = require('./data-checkForError');

module.exports = {
  store: store,
  preStore: prePersist,
  loadAll: loadAll,
  find: find,
  checkForError: checkForError,
};
// 
//  work-register.js
//  ~/works/
// 
//  created:    2021-07-12
// 
//  register, find (and remove?) ops for works
// 
'use strict';

const createUser = require('./createUser');

const findUser = require('./findUser');
const loadAllUsers = require('./loadAllUsers');

module.exports = {
  createUser: createUser,
  findUser: findUser,
  loadAllUsers: loadAllUsers,
};

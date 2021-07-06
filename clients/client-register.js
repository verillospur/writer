// 
//  client-register.js
//  ~/clients/
// 
//  created:    2021-02-01
// 
//  register, find (and remove?) ops for clients
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

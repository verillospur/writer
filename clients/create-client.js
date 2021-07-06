// 
//  create-client.js
//  ~/clients/
// 
//  created:    2021-02-01
// 
//  creates a client
// 
'use strict';

const config = require('../config');
const errorhandler = require('../errorhandler');
const log = require('../log');

const createUser = (telegramUsername, telegramUserId) => {
  const lg = msg => { log.log(`createUser(): ${msg}`); };
  
  // exists already?
  const loader = require('./loadRegistrationByTgUserId');
  const exists = loader.loadByTelegramUserId(telegramUserId);
  if (!exists) {

    // generate new user
    const gen = require('./user-def');
    const user = gen.get();
    user.telegramUsername = telegramUsername;
    user.telegramUserId = telegramUserId;
    user.registrationDate = new Date();

    // generate a user id registration
    const idgen = require('./id-register');
    const reg = idgen.register(telegramUsername, telegramUserId);
    user.userId = reg.userId;

    // save the user
    const storage = require('../data');
    if (!storage.store(user, config.users.user_data_collection)) {
        // something went wrong.
        errorhandler.handle(new Error(`Problem storing new user. UserId:${user.userId};TelegramId:${user.telegramUserId};TelegramUsername:${user.telegramUsername}. Please refer to the log to determine the reason for the failure.`));
    }

    // return the new user id
    return user.userId;

  }

  // user already exists
  else {
    lg(`User already exists in database. Id=${exists.userId}`);
    return exists.userId;
  }

};

module.exports = createUser;
// 
//  handler.js 
//  ~/errorhandler/ 
// 
//  created:    01/01/2021 
// 
//  error handler. derrr.
// 
'use strict';

const admin = require('../admin');
const log = require('../log');

const thrower = (err) => {
    admin.logMsg(err);
};

const handler = (err) => {
    if (!err) {
        const msg = 'Error: There is no error! Haha!';
        admin.logMsg(err);
    }
    else {
        admin.logMsg(err);
    }
};

module.exports = {
    handle: handler,
    throw: thrower
};
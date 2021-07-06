// 
//  admin.js 
//  ~/admin/ 
// 
//  created:    04/01/2021 
// 
//  admin (dev) stuff
// 
'use strict';

const dateFormatter = require('../framework/date-formatter');
const log = require('../log');

const msgOut = (msg, noPrefix) => {
    const prefix = (
        noPrefix ? '' : dateFormatter.get(new Date(), 'yyyyMMdd-hhmmss ⏩ ')
    );
    const m = `${prefix}${msg}`;
    console.log(m);
    log.log(`admin.msgOut(): ${m}`)
};

const tableOut = (msg, noPrefix) => {
    if (!noPrefix) {
        const prefix = dateFormatter.get(new Date(), 'yyyyMMdd-hhmmss ⏬⏬');
        console.log(`${prefix}`);
    }
    console.table(msg);
    log.log(`admin.tableOut(): ${prefix}-table->${msg}`)
};

module.exports = {
    logMsg: msgOut,
    logMsgTable: tableOut,
}

// 
//  log.js 
//  ~/log/ 
// 
//  created:    2021-01-05
//  modified:   2021-06-13
//
//  application log
// 
'use strict';

const g_config = require('../config');
const config = g_config;
const levels = require('./log-levels');
const defaults = require('./default-log-levels');
const framework = require('../framework/framework');

const log = (msg, level = defaults.default) => {
  
  // const process = require('process');
  // const child_process = require('child_process');
  // const comp = child_process.fork(`${__dirname}/_log`);
  // comp.send(

  // // check level
  level = defaults.default;
  if (!level || level === undefined) {
    level = defaults.default;
  }

  // // check directory and file 
  const fileman = require('./log-file-manager');
  const filepath = fileman.check();

  // process message
  const processer = require('./message-processor');
  const finalMsg = processer.process(msg);

  // write msg 
  const framework = require('../framework');
  // framework.filesystem.appendToFile(finalMsg, filepath);
  const fs = require('fs');
  try {
    fs.appendFileSync(filepath, finalMsg, config.ENCODING_DEFAULT);
  }
  catch (ex) {
    fs.writeFileSync(finalMsg, filepath);
    try {
      fs.writeFileSync(finalMsg, filepath);
    }
    catch (_ex) { }
  }

  // console write?
  if (config.log.always_write_to_console) {
    console.log(finalMsg.trim());
  }

};

const debugCall = (module, fn, params, notes) => {
  // just a call to LOG with some extra header params set
  const msg_dt = framework.dateFormatter.get(new Date(), config.log.log_message_prefix_format)
  const msg = `Date/time: ${msg_dt}\n
Module: ${module}\nFunction: ${fn}\nParams: ${params}\nNotes:${notes}\n`
  log(msg, levels.Debug);
}


module.exports = {
  log: log,
  debugCall: debugCall,
}

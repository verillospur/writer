// 
//  create-work.js
//  ~/works/
// 
//  created:    2021-07-12
// 
//  creates a work
// 
'use strict';

const log = require('../log');
const config = require('../config');
const errorhandler = require('../errorhandler');
const framework = require('../framework');

const createWork = (content, title) => {
  const lg = msg => { log.log(`createWork(): ${msg}`); };
  
  // exists already?
  const loader = require('./loadWorkMetaByTitle');
  const exists = loader.loadWorkMetaByTitle( title );
  if (!exists) {

    // generate an id
    const workid = 
      config.works.workIdPrefix + 
      framework.idGenerator.generate() +
      config.works.workIdSuffix;

    // generate new meta object
    const meta_gen = require('./work-meta');
    const meta = meta_gen.get();
    meta.title = title;
    meta.workId = workid;

    // generate work object
    const work_gen = require('./work-def');
    const work = work_gen.get();
    work.content = content;
    work._id = workid;


    // save the meta
    const storage = require('../data');
    if (!storage.store(meta, config.works.meta_data_collection)) {
        // something went wrong.
        errorhandler.handle(new Error(`Problem storing new work metadata: title: ${work.title}, work id: ${work._id}. Please refer to the log to determine the reason for the failure.`));
    }

    // save the work
    if (!storage.store(work, config.works.works_data_collection)) {
        // something went wrong.
        errorhandler.handle(new Error(`Problem storing new work: title: ${work.title}, work id: ${work._id}. Please refer to the log to determine the reason for the failure.`));
    }

    // return the new user id
    return work._Id;

  }

  // work already exists
  else {
    lg(`Work by that title already exists in database. Id=${exists.workId}`);
    return exists.workId;
  }

};

module.exports = createUser;
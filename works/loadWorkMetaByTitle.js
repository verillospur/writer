// 
//  loadWorkMetaByTitle.js
//  ~/works/
// 
//  created:    2021-07-12
// 
//  loadWorkMetaByTitle
// 
'use strict';

const config = require('../config');

const loadWorkMetaByTitle = title => {

    const storage = require('../data');
    const data = storage.find(config.works.meta_data_collection, { title: title });
    let rv = null;
    if (data.success) {
        rv = data.records[0];
    }
    return rv;
};

module.exports = {
    loadWorkMetaByTitle: loadWorkMetaByTitle
};

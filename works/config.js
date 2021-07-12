// 
//  config.js
//  ~/works/
// 
//  created:    2021-07-12
// 
//  config for works
// 
'use strict';

const config = () => {
    return {
        
        // id format
        workIdPrefix: 'wrk-',
        workIdSuffix: '',

        // data info
        works_data_collection: 'works',
        meta_data_collection: 'meta',
        
    };
};

module.exports = config();


// 
//  config.js 
//  ~/config/ 
// 
//  created:    01/01/2021 
// 
//  app-wide configuration 
// 
'use strict';

const config = () => {

    return {
      
        // log
        log: require('../log/config'), 

        // framework
        framework: require('../framework/config'), 

        // mongodb
        mongodb: require('../data/config'), 

        // clients
        clients: require('../clients/config'), 

        // works
        works: require('../works/config'), 

        // jobs
        // jobs: require('../jobs/config'), 

    };
};

module.exports = config();

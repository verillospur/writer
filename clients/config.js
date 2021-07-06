// 
//  config.js
//  ~/config/
// 
//  created:    2021-02-01
// 
//  config for client-related shit
// 
'use strict';

const config = () => {
    return {
        
        // id format
        clientIdPrefix: 'cli-',
        clientIdSuffix: '-ent',

        // data info
        // user_register_data_collection: 'clientsRegister',
        user_data_collection: 'clients',
        
    };
};

module.exports = config();


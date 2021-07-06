// 
//  config.js 
//  ~/data/ 
// 
//  created:    2021-02-01
// 
//  data config
// 
'use strict';

const config = () => {
    return {
        
        MongoDB_db: 'orders-incoming-db',
        MongoDB_host: 'localhost',
        MongoDB_port: 27017,
        MongoDB_url: 'mongodb://localhost:27017/orders-incoming-db',
        MongoDB_url_nodb: 'mongodb://localhost:27017/'
    };
};

module.exports = config();

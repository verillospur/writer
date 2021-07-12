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
        
        MongoDB_db: 'writerdb',
        MongoDB_host: 'localhost',
        MongoDB_port: 27017,
        MongoDB_url: 'mongodb://localhost:27017/writerdb',
        MongoDB_url_nodb: 'mongodb://localhost:27017/'
    };
};

module.exports = config();

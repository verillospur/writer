﻿// 
//  config.js 
//  ~/log/ 
// 
//  created:    05/01/2021 
// 
//  log config
// 
'use strict';

const config = () => {
    return {
        
        // encoding
        ENCODING_DEFAULT: 'utf8',
        
        // log file
        log_file_dir: 'C:\\dev\\writer\\_logs',
        log_file_name_format: 'yyyyMMdd',
        log_file_name_ext: '.log',

        // messages
        log_message_prefix_format: 'yyyyMMdd-HHmmss ▶ ',

        // console
        always_write_to_console: true,
    };
};

module.exports = config();

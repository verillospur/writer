// 
//  work-meta.js
//  ~/works/
// 
//  created:    2021-07-12
// 
//  work meta fields 
// 
'use strict';

const getMeta = () => {

    return {
        _id: '',
        jobId: '',
        workId: '',
        versionNumber: 0, 
        isCurrentVersion: true,
        title: '',
        workingTitles: [],
        workingTitleDates: [],
        author: '',
        penName: '',
        authors: [],
        created: new Date(),
        started: new Date(),
        finished: new Date(),
        isStarted: true,
        isFinished: false,
        duration: 0,
        durationUnit: 'd',
        urls: [],
        notes: '',
    };
};

module.exports = {
  get: getMeta
};

// 
//  client-def.js
//  ~/clients/
// 
//  created:    2021-02-01
// 
//  definition of client
// 
'use strict';

const getClient = () => {

  return {
    name: '',
    firstname: '',
    lastname: '',
    country: '',
    methodToObtain: '',
    telephone: '',
    address: '',
    telegramData: {
      telegramUsername: '@',
      telegramUsernames: [],
      telegramUserId: '0',
      registrationDate: new Date(),
      userId: '0',
      profileFirstName: '',
      profileLastName: '',
      profileName: '',
      profileBio: '',
      profilePhoneNumber: '',
      profileInfo: '',
      profileMainImage: Buffer.alloc(0),
      profileImages: [],
    },
    notes: '',
  };
};

module.exports = {
  get: getClient
}

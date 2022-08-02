'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('Images', [
        {
          url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/longmontco/Golden_Ponds_212ce4fd-2282-440e-b5e2-9462b6be9a40.jpg',
          spotId: 1
        },
        {
            url: 'https://on-hook.s3.amazonaws.com/1659464731618.jpg',
            spotId: 2
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659468998330.jpg',
            spotId: 3
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659469274003.jpg',
            spotId: 4
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659469637090.jpg',
            spotId: 5
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659469874440.jpg',
            spotId: 6
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659470135407.jpg',
            spotId: 7
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659470433644.jpg',
            spotId: 8
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659470771859.jpg',
            spotId: 9
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659471059404.JPG',
            spotId: 10
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659471307100.jpg',
            spotId: 11
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659471568878.jpg',
            spotId: 12
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659471720846.jpg',
            spotId: 13
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659471946338.jpg',
            spotId: 14
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659472524804.jfif',
            spotId: 15
        },
        {
            url: 'https://on-hook.s3.amazonaws.com/1659475460160.jpg',
            spotId: 16
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659475660386.jpg',
            spotId: 17
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659475952670.jpg',
            spotId: 18
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659478000030.jpg',
            spotId: 19
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659478224691.jpg',
            spotId: 20
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659478620761.jpg',
            spotId: 21
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659478779169.jpg',
            spotId: 22
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659480609925.jpg',
            spotId: 23
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659480832251.jpg',
            spotId: 24
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659481075060.jpg',
            spotId: 25
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659481240881.jpg',
            spotId: 26
        },
        {
            url: 'https://on-hook.s3.us-west-2.amazonaws.com/1659481903580.JPG',
            spotId: 27
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Images', null, {});
  }
};

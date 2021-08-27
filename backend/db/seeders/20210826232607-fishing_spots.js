'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fishing_Spots', [
        {
          user_id: 1,
          pic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpics4.city-data.com%2Fcpicv%2Fvfiles19137.jpg&f=1&nofb=1',
          description: 'This is a description of a Fishing Hole',
          name: 'Test Spot',
          city: 'Longmont',
          state: 'CO',
          country: 'USA',
          lat: 40.17012,
          lng: -105.13876
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
  }
};

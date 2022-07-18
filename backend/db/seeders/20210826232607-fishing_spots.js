'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fishing_Spots', [
        {
          user_id: 1,
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
    await queryInterface.bulkDelete('Fishing_Spots', null, {});
  }
};

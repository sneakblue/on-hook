'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fishing_Spots', [
        {
          user_id: 1,
          description: 'This is a description of a Fishing Hole',
          name: 'Golden Ponds',
          city: 'Longmont',
          state: 'CO',
          country: 'USA',
          lat: 40.17012,
          lng: -105.13876
        },
        {
            user_id: 1,
            description: 'A Beautiful lake with plenty of fishing. Lots of good spots and nice views!',
            name: 'Union Reservoir',
            city: 'Longmont',
            state: 'CO',
            country: 'USA',
            lat: 40.18269324371436,
            lng: -105.0397492725014
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

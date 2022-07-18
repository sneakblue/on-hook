'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
        {
          user_id: 1,
          fishing_spot_id: 1,
          review: 'This is a test review',
          rating: 7
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
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};

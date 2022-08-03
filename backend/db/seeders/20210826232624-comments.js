'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
        {
          user_id: 1,
          fishing_spot_id: 1,
          comment: 'This is a test comment on a fishing spot'
        },
        {
            user_id: 2,
            fishing_spot_id: 2,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 5,
            fishing_spot_id: 2,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 6,
            fishing_spot_id: 3,
            comment: 'Lost my lure!'
        },
        {
            user_id: 7,
            fishing_spot_id: 3,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 9,
            fishing_spot_id: 4,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 10,
            fishing_spot_id: 4,
            comment: 'Lost my lure!'
        },
        {
            user_id: 11,
            fishing_spot_id: 4,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 3,
            fishing_spot_id: 5,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 5,
            fishing_spot_id: 5,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 8,
            fishing_spot_id: 5,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 7,
            fishing_spot_id: 6,
            comment: 'Love to camp here'
        },
        {
            user_id: 4,
            fishing_spot_id: 6,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 9,
            fishing_spot_id: 7,
            comment: 'Lost my lure!'
        },
        {
            user_id: 11,
            fishing_spot_id: 8,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 10,
            fishing_spot_id: 8,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 11,
            fishing_spot_id: 8,
            comment: 'What bait is best here?'
        },
        {
            user_id: 2,
            fishing_spot_id: 9,
            comment: 'Lost my lure!'
        },
        {
            user_id: 4,
            fishing_spot_id: 10,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 6,
            fishing_spot_id: 11,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 3,
            fishing_spot_id: 11,
            comment: 'Love to camp here'
        },
        {
            user_id: 5,
            fishing_spot_id: 12,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 2,
            fishing_spot_id: 12,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 7,
            fishing_spot_id: 12,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 8,
            fishing_spot_id: 12,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 9,
            fishing_spot_id: 13,
            comment: 'Lost my lure!'
        },
        {
            user_id: 4,
            fishing_spot_id: 13,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 5,
            fishing_spot_id: 13,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 8,
            fishing_spot_id: 13,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 2,
            fishing_spot_id: 13,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 3,
            fishing_spot_id: 13,
            comment: 'What bait is best here?'
        },
        {
            user_id: 8,
            fishing_spot_id: 14,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 4,
            fishing_spot_id: 14,
            comment: 'Lost my lure!'
        },
        {
            user_id: 5,
            fishing_spot_id: 14,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 9,
            fishing_spot_id: 14,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 10,
            fishing_spot_id: 14,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 11,
            fishing_spot_id: 15,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 2,
            fishing_spot_id: 15,
            comment: 'Love to camp here'
        },
        {
            user_id: 5,
            fishing_spot_id: 15,
            comment: 'Lost my lure!'
        },
        {
            user_id: 6,
            fishing_spot_id: 15,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 7,
            fishing_spot_id: 15,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 3,
            fishing_spot_id: 16,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 2,
            fishing_spot_id: 16,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 1,
            fishing_spot_id: 16,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 8,
            fishing_spot_id: 16,
            comment: 'Lost my lure!'
        },
        {
            user_id: 9,
            fishing_spot_id: 16,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 5,
            fishing_spot_id: 17,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 4,
            fishing_spot_id: 17,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 6,
            fishing_spot_id: 17,
            comment: 'What bait is best here?'
        },
        {
            user_id: 8,
            fishing_spot_id: 17,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 10,
            fishing_spot_id: 17,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 1,
            fishing_spot_id: 17,
            comment: 'Lost my lure!'
        },
        {
            user_id: 9,
            fishing_spot_id: 17,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 1,
            fishing_spot_id: 18,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 2,
            fishing_spot_id: 18,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 6,
            fishing_spot_id: 18,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 3,
            fishing_spot_id: 18,
            comment: 'Love to camp here'
        },
        {
            user_id: 4,
            fishing_spot_id: 18,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 6,
            fishing_spot_id: 18,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 7,
            fishing_spot_id: 18,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 9,
            fishing_spot_id: 18,
            comment: 'Lost my lure!'
        },
        {
            user_id: 10,
            fishing_spot_id: 18,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 1,
            fishing_spot_id: 18,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 2,
            fishing_spot_id: 19,
            comment: 'What bait is best here?'
        },
        {
            user_id: 1,
            fishing_spot_id: 19,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 10,
            fishing_spot_id: 19,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 11,
            fishing_spot_id: 19,
            comment: 'Lost my lure!'
        },
        {
            user_id: 4,
            fishing_spot_id: 19,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 5,
            fishing_spot_id: 19,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 3,
            fishing_spot_id: 19,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 1,
            fishing_spot_id: 20,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 2,
            fishing_spot_id: 20,
            comment: 'Love to camp here'
        },
        {
            user_id: 5,
            fishing_spot_id: 20,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 6,
            fishing_spot_id: 20,
            comment: 'Lost my lure!'
        },
        {
            user_id: 8,
            fishing_spot_id: 20,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 11,
            fishing_spot_id: 20,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 10,
            fishing_spot_id: 20,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 8,
            fishing_spot_id: 20,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 3,
            fishing_spot_id: 20,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 7,
            fishing_spot_id: 20,
            comment: 'Lost my lure!'
        },
        {
            user_id: 9,
            fishing_spot_id: 20,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 10,
            fishing_spot_id: 20,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 1,
            fishing_spot_id: 20,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 2,
            fishing_spot_id: 21,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 1,
            fishing_spot_id: 21,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 7,
            fishing_spot_id: 21,
            comment: 'Lost my lure!'
        },
        {
            user_id: 8,
            fishing_spot_id: 21,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 9,
            fishing_spot_id: 21,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 10,
            fishing_spot_id: 21,
            comment: 'What bait is best here?'
        },
        {
            user_id: 8,
            fishing_spot_id: 21,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 10,
            fishing_spot_id: 21,
            comment: 'Lost my lure!'
        },
        {
            user_id: 2,
            fishing_spot_id: 22,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 1,
            fishing_spot_id: 22,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 5,
            fishing_spot_id: 22,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 9,
            fishing_spot_id: 22,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 7,
            fishing_spot_id: 22,
            comment: 'Lost my lure!'
        },
        {
            user_id: 8,
            fishing_spot_id: 22,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 9,
            fishing_spot_id: 22,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 3,
            fishing_spot_id: 22,
            comment: 'Love to camp here'
        },
        {
            user_id: 2,
            fishing_spot_id: 23,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 1,
            fishing_spot_id: 23,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 6,
            fishing_spot_id: 23,
            comment: 'Lost my lure!'
        },
        {
            user_id: 3,
            fishing_spot_id: 23,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 6,
            fishing_spot_id: 23,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 8,
            fishing_spot_id: 23,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 7,
            fishing_spot_id: 23,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 2,
            fishing_spot_id: 24,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 5,
            fishing_spot_id: 24,
            comment: 'Lost my lure!'
        },
        {
            user_id: 7,
            fishing_spot_id: 24,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 9,
            fishing_spot_id: 24,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 10,
            fishing_spot_id: 24,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 11,
            fishing_spot_id: 24,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 8,
            fishing_spot_id: 24,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 1,
            fishing_spot_id: 25,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 2,
            fishing_spot_id: 25,
            comment: 'Lost my lure!'
        },
        {
            user_id: 5,
            fishing_spot_id: 25,
            comment: 'I took my class photos here, with a fish!'
        },
        {
            user_id: 3,
            fishing_spot_id: 25,
            comment: 'Love to camp here'
        },
        {
            user_id: 5,
            fishing_spot_id: 25,
            comment: 'Has anyone had much luck here?'
        },
        {
            user_id: 7,
            fishing_spot_id: 26,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 10,
            fishing_spot_id: 26,
            comment: 'Used to go here all the time'
        },
        {
            user_id: 2,
            fishing_spot_id: 27,
            comment: 'If there was a good spot on shore, where would it be?'
        },
        {
            user_id: 1,
            fishing_spot_id: 27,
            comment: 'Lost my lure!'
        },
        {
            user_id: 3,
            fishing_spot_id: 27,
            comment: 'Is there camping allowed near the shore?'
        },
        {
            user_id: 7,
            fishing_spot_id: 27,
            comment: 'I took my class photos here, with a fish!'
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
    await queryInterface.bulkDelete('Comments', null, {});
  }
};

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
        {
            user_id: 2,
            fishing_spot_id: 2,
            review: 'Love this spot, soo much fishing here!',
            rating: 5
        },
        {
            user_id: 1,
            fishing_spot_id: 2,
            review: 'One of the best, always a go-to spot!',
            rating: 7
        },
        {
            user_id: 3,
            fishing_spot_id: 2,
            review: 'Did not have much luck, but still good',
            rating: 3
        },
        {
            user_id: 4,
            fishing_spot_id: 2,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 9
        },
        {
            user_id: 2,
            fishing_spot_id: 3,
            review: 'Could be better',
            rating: 2
        },
        {
            user_id: 6,
            fishing_spot_id: 3,
            review: 'Love this spot, soo much fishing here!',
            rating: 7
        },
        {
            user_id: 7,
            fishing_spot_id: 3,
            review: 'Wish it was not so crowded',
            rating: 9
        },
        {
            user_id: 8,
            fishing_spot_id: 4,
            review: 'One of the best, always a go-to spot!',
            rating: 2
        },
        {
            user_id: 9,
            fishing_spot_id: 4,
            review: 'Did not have much luck, but still good',
            rating: 4
        },
        {
            user_id: 11,
            fishing_spot_id: 4,
            review: 'One of my favorite spots, a good time as usual!',
            rating: 6
        },
        {
            user_id: 2,
            fishing_spot_id: 4,
            review: 'Love this spot, soo much fishing here!',
            rating: 5
        },
        {
            user_id: 6,
            fishing_spot_id: 4,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 7
        },
        {
            user_id: 2,
            fishing_spot_id: 5,
            review: 'Did not have much luck, but still good',
            rating: 5
        },
        {
            user_id: 1,
            fishing_spot_id: 5,
            review: 'One of the best, always a go-to spot!',
            rating: 4
        },
        {
            user_id: 9,
            fishing_spot_id: 5,
            review: 'Wish it was not so crowded',
            rating: 8
        },
        {
            user_id: 8,
            fishing_spot_id: 5,
            review: 'Could be better',
            rating: 4
        },
        {
            user_id: 6,
            fishing_spot_id: 5,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 9
        },
        {
            user_id: 5,
            fishing_spot_id: 6,
            review: 'Love this spot, soo much fishing here!',
            rating: 10
        },
        {
            user_id: 4,
            fishing_spot_id: 6,
            review: 'Did not have much luck, but still good',
            rating: 5
        },
        {
            user_id: 3,
            fishing_spot_id: 6,
            review: 'One of the best, always a go-to spot!',
            rating: 5
        },
        {
            user_id: 2,
            fishing_spot_id: 6,
            review: 'One of my favorite spots, a good time as usual!',
            rating: 7
        },
        {
            user_id: 1,
            fishing_spot_id: 6,
            review: 'Could be better',
            rating: 3
        },
        {
            user_id: 2,
            fishing_spot_id: 7,
            review: 'Wish it was not so crowded',
            rating: 1
        },
        {
            user_id: 1,
            fishing_spot_id: 7,
            review: 'Love this spot, soo much fishing here!',
            rating: 2
        },
        {
            user_id: 3,
            fishing_spot_id: 7,
            review: 'Did not have much luck, but still good',
            rating: 5
        },
        {
            user_id: 6,
            fishing_spot_id: 7,
            review: 'One of the best, always a go-to spot!',
            rating: 3
        },
        {
            user_id: 7,
            fishing_spot_id: 7,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 2
        },
        {
            user_id: 8,
            fishing_spot_id: 7,
            review: 'One of my favorite spots, a good time as usual!',
            rating: 5
        },
        {
            user_id: 9,
            fishing_spot_id: 7,
            review: 'Could be better',
            rating: 7
        },
        {
            user_id: 10,
            fishing_spot_id: 8,
            review: 'Wish it was not so crowded',
            rating: 9
        },
        {
            user_id: 11,
            fishing_spot_id: 8,
            review: 'Love this spot, soo much fishing here!',
            rating: 3
        },
        {
            user_id: 3,
            fishing_spot_id: 8,
            review: 'Did not have much luck, but still good',
            rating: 5
        },
        {
            user_id: 2,
            fishing_spot_id: 8,
            review: 'One of the best, always a go-to spot!',
            rating: 6
        },
        {
            user_id: 1,
            fishing_spot_id: 8,
            review: 'One of my favorite spots, a good time as usual!',
            rating: 8
        },
        {
            user_id: 8,
            fishing_spot_id: 8,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 4
        },
        {
            user_id: 6,
            fishing_spot_id: 9,
            review: 'Could be better',
            rating: 2
        },
        {
            user_id: 3,
            fishing_spot_id: 9,
            review: 'Did not have much luck, but still good',
            rating: 4
        },
        {
            user_id: 2,
            fishing_spot_id: 9,
            review: 'Love this spot, soo much fishing here!',
            rating: 7
        },
        {
            user_id: 1,
            fishing_spot_id: 9,
            review: 'Wish it was not so crowded',
            rating: 8
        },
        {
            user_id: 5,
            fishing_spot_id: 9,
            review: 'One of the best, always a go-to spot!',
            rating: 9
        },
        {
            user_id: 11,
            fishing_spot_id: 9,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 2
        },
        {
            user_id: 12,
            fishing_spot_id: 9,
            review: 'Love this spot, soo much fishing here!',
            rating: 3
        },
        {
            user_id: 2,
            fishing_spot_id: 10,
            review: 'Did not have much luck, but still good',
            rating: 5
        },
        {
            user_id: 1,
            fishing_spot_id: 10,
            review: 'Could be better',
            rating: 5
        },
        {
            user_id: 3,
            fishing_spot_id: 10,
            review: 'One of the best, always a go-to spot!',
            rating: 6
        },
        {
            user_id: 4,
            fishing_spot_id: 10,
            review: 'One of my favorite spots, a good time as usual!',
            rating: 7
        },
        {
            user_id: 5,
            fishing_spot_id: 10,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 9
        },
        {
            user_id: 2,
            fishing_spot_id: 11,
            review: 'Wish it was not so crowded',
            rating: 2
        },
        {
            user_id: 3,
            fishing_spot_id: 11,
            review: 'Love this spot, soo much fishing here!',
            rating: 4
        },
        {
            user_id: 1,
            fishing_spot_id: 11,
            review: 'Did not have much luck, but still good',
            rating: 5
        },
        {
            user_id: 6,
            fishing_spot_id: 11,
            review: 'One of the best, always a go-to spot!',
            rating: 6
        },
        {
            user_id: 7,
            fishing_spot_id: 12,
            review: 'Could be better',
            rating: 3
        },
        {
            user_id: 8,
            fishing_spot_id: 12,
            review: 'One of my favorite spots, a good time as usual!',
            rating: 8
        },
        {
            user_id: 9,
            fishing_spot_id: 12,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 9
        },
        {
            user_id: 10,
            fishing_spot_id: 13,
            review: 'Love this spot, soo much fishing here!',
            rating: 2
        },
        {
            user_id: 12,
            fishing_spot_id: 13,
            review: 'Did not have much luck, but still good',
            rating: 5
        },
        {
            user_id: 11,
            fishing_spot_id: 13,
            review: 'One of the best, always a go-to spot!',
            rating: 7
        },
        {
            user_id: 2,
            fishing_spot_id: 13,
            review: 'Wish it was not so crowded',
            rating: 8
        },
        {
            user_id: 1,
            fishing_spot_id: 14,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 3
        },
        {
            user_id: 2,
            fishing_spot_id: 14,
            review: 'Love this spot, soo much fishing here!',
            rating: 2
        },
        {
            user_id: 3,
            fishing_spot_id: 14,
            review: 'Did not have much luck, but still good',
            rating: 7
        },
        {
            user_id: 4,
            fishing_spot_id: 15,
            review: 'Could be better',
            rating: 8
        },
        {
            user_id: 5,
            fishing_spot_id: 15,
            review: 'One of my favorite spots, a good time as usual!',
            rating: 9
        },
        {
            user_id: 6,
            fishing_spot_id: 15,
            review: 'One of the best, always a go-to spot!',
            rating: 3
        },
        {
            user_id: 7,
            fishing_spot_id: 16,
            review: 'Did not have much luck, but still good',
            rating: 6
        },
        {
            user_id: 8,
            fishing_spot_id: 16,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 8
        },
        {
            user_id: 9,
            fishing_spot_id: 16,
            review: 'Love this spot, soo much fishing here!',
            rating: 3
        },
        {
            user_id: 10,
            fishing_spot_id: 16,
            review: 'Wish it was not so crowded',
            rating: 8
        },
        {
            user_id: 11,
            fishing_spot_id: 17,
            review: 'Could be better',
            rating: 9
        },
        {
            user_id: 12,
            fishing_spot_id: 17,
            review: 'One of the best, always a go-to spot!',
            rating: 5
        },
        {
            user_id: 1,
            fishing_spot_id: 17,
            review: 'One of my favorite spots, a good time as usual!',
            rating: 3
        },
        {
            user_id: 2,
            fishing_spot_id: 18,
            review: 'Did not have much luck, but still good',
            rating: 2
        },
        {
            user_id: 3,
            fishing_spot_id: 18,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 7
        },
        {
            user_id: 4,
            fishing_spot_id: 19,
            review: 'Love this spot, soo much fishing here!',
            rating: 5
        },
        {
            user_id: 5,
            fishing_spot_id: 19,
            review: 'One of the best, always a go-to spot!',
            rating: 8
        },
        {
            user_id: 6,
            fishing_spot_id: 19,
            review: 'Could be better',
            rating: 8
        },
        {
            user_id: 7,
            fishing_spot_id: 19,
            review: 'Did not have much luck, but still good',
            rating: 9
        },
        {
            user_id: 8,
            fishing_spot_id: 20,
            review: 'One of my favorite spots, a good time as usual!',
            rating: 4
        },
        {
            user_id: 9,
            fishing_spot_id: 20,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 2
        },
        {
            user_id: 10,
            fishing_spot_id: 20,
            review: 'Love this spot, soo much fishing here!',
            rating: 8
        },
        {
            user_id: 11,
            fishing_spot_id: 20,
            review: 'One of the best, always a go-to spot!',
            rating: 9
        },
        {
            user_id: 12,
            fishing_spot_id: 20,
            review: 'Did not have much luck, but still good',
            rating: 10
        },
        {
            user_id: 1,
            fishing_spot_id: 21,
            review: 'Could be better',
            rating: 5
        },
        {
            user_id: 2,
            fishing_spot_id: 21,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 7
        },
        {
            user_id: 3,
            fishing_spot_id: 21,
            review: 'Love this spot, soo much fishing here!',
            rating: 8
        },
        {
            user_id: 2,
            fishing_spot_id: 22,
            review: 'Did not have much luck, but still good',
            rating: 3
        },
        {
            user_id: 1,
            fishing_spot_id: 22,
            review: 'One of the best, always a go-to spot!',
            rating: 9
        },
        {
            user_id: 6,
            fishing_spot_id: 22,
            review: 'Wish it was not so crowded',
            rating: 5
        },
        {
            user_id: 9,
            fishing_spot_id: 22,
            review: 'One of my favorite spots, a good time as usual!',
            rating: 5
        },
        {
            user_id: 2,
            fishing_spot_id: 23,
            review: 'Love this spot, soo much fishing here!',
            rating: 7
        },
        {
            user_id: 1,
            fishing_spot_id: 23,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 8
        },
        {
            user_id: 5,
            fishing_spot_id: 23,
            review: 'Did not have much luck, but still good',
            rating: 9
        },
        {
            user_id: 6,
            fishing_spot_id: 24,
            review: 'Could be better',
            rating: 9
        },
        {
            user_id: 8,
            fishing_spot_id: 24,
            review: 'One of the best, always a go-to spot!',
            rating: 3
        },
        {
            user_id: 9,
            fishing_spot_id: 25,
            review: 'Wish it was not so crowded',
            rating: 2
        },
        {
            user_id: 2,
            fishing_spot_id: 25,
            review: 'One of my favorite spots, a good time as usual!',
            rating: 8
        },
        {
            user_id: 1,
            fishing_spot_id: 25,
            review: 'Love this spot, soo much fishing here!',
            rating: 5
        },
        {
            user_id: 8,
            fishing_spot_id: 26,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 7
        },
        {
            user_id: 9,
            fishing_spot_id: 26,
            review: 'Did not have much luck, but still good',
            rating: 8
        },
        {
            user_id: 12,
            fishing_spot_id: 26,
            review: 'Could be better',
            rating: 2
        },
        {
            user_id: 11,
            fishing_spot_id: 26,
            review: 'One of the best, always a go-to spot!',
            rating: 5
        },
        {
            user_id: 10,
            fishing_spot_id: 27,
            review: 'Love this spot, soo much fishing here!',
            rating: 8
        },
        {
            user_id: 2,
            fishing_spot_id: 27,
            review: 'Wish the docks were built out more, but still good access to fishing',
            rating: 9
        },
        {
            user_id: 1,
            fishing_spot_id: 27,
            review: 'Could be better',
            rating: 10
        },
        {
            user_id: 4,
            fishing_spot_id: 27,
            review: 'Did not have much luck, but still good',
            rating: 2
        },
        {
            user_id: 5,
            fishing_spot_id: 27,
            review: 'Wish it was not so crowded',
            rating: 3
        },
        {
            user_id: 6,
            fishing_spot_id: 27,
            review: 'One of the best, always a go-to spot!',
            rating: 5
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

'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fakeemail@test.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fakeemail2@test.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'homerjay@test.io',
        username: 'HomerS',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'zoned@test.io',
        username: 'SerlingR',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'old@test.io',
        username: 'oldMan',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'moby2@test.io',
        username: 'MobysWhale',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'blank@test.io',
        username: 'blankman',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'croft164@test.io',
        username: 'LaraC',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'mario@test.io',
        username: 'theMario',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'goodash@test.io',
        username: 'AshWill',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'bigfish@test.io',
        username: 'BigFish',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};

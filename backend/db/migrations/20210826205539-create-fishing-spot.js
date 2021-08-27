'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Fishing_Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users' }
      },
      description: {
          type: Sequelize.STRING(256),
          allowNull: false
      },
      pic: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      city: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      country: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      lat: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      lng: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Fishing_Spots');
  }
};

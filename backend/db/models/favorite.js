'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Favorite.belongsTo(models.User, { foreignKey: 'user_id' });
      Favorite.belongsTo(models.Fishing_Spot, { foreignKey: 'fishing_spot_id'});
    }
  };
  Favorite.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fishing_spot_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};

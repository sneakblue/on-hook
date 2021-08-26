'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fishing_Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fishing_Spot.belongsTo(models.User, { foreignKey: 'user_id' });

      Fishing_Spot.hasMany(models.Review, { foreignKey: 'fishing_spot_id'})
    }
  };
  Fishing_Spot.init({
    user_id:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    pic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lat: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    lng: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Fishing_Spot',
  });
  return Fishing_Spot;
};

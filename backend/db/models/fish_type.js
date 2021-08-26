'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fish_Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Fish_Type.init({
    name: DataTypes.STRING,
    fishing_spot_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fish_Type',
  });
  return Fish_Type;
};
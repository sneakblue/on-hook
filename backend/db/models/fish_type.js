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
      Fish_Type.belongsTo(models.Fishing_Spot, { foreignKey: 'fishing_spot_id' });
    }
  };
  Fish_Type.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fishing_spot_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Fish_Type',
  });
  return Fish_Type;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' });
      Comment.belongsTo(models.Fishing_Spot, { foreignKey: 'fishing_spot_id' });
    }
  };
  Comment.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fishing_spot_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};

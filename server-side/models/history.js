'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.User, { foreignKey: 'UserId' })
      History.belongsTo(models.Item, { foreignKey: 'ItemId' })
    }
  }
  History.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'userId is required' },
        notEmpty: { msg: 'userId is required' }
      }
    },
    ItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'itemId is required' },
        notEmpty: { msg: 'itemId is required' }
      }
    },
    totalItems: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Total items is required' },
        notEmpty: { msg: 'Total items is required' }
      }
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Total price is required' },
        notEmpty: { msg: 'Total price is required' }
      }
    },
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};
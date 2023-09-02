'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, { foreignKey: 'UserId' })
      Cart.belongsTo(models.Item, { foreignKey: 'ItemId' })
    }
  }
  Cart.init({
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
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Quantity is required' },
        notEmpty: { msg: 'Quantity is required' },
        min: { args: 1, msg: 'Minimum quantity is 1' }
      }
    },
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
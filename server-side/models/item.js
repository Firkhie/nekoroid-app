'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.hasMany(models.Cart, { foreignKey: 'ItemId' })
      Item.hasMany(models.Wishlist, { foreignKey: 'ItemId' })
      Item.hasMany(models.History, { foreignKey: 'ItemId' })
      Item.belongsTo(models.Category, { foreignKey: 'CategoryId' })
      Item.belongsTo(models.Manufacturer, { foreignKey: 'ManufacturerId' })
    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Item name is required' },
        notEmpty: { msg: 'Item name is required' },
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Price is required' },
        notEmpty: { msg: 'Price is required' },
        min: { args: 1000, msg: 'Minimum price is 1000' },
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Image URL is required' },
        notEmpty: { msg: 'Image URL is required' },
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Stock is required' },
        notEmpty: { msg: 'Stock is required' },
        min: { args: 1, msg: 'Minimum stock is 1' },
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'CategoryId is required' },
        notEmpty: { msg: 'CategoryId is required' },
      }
    },
    ManufacturerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'ManufacturerId is required' },
        notEmpty: { msg: 'ManufacturerId is required' },
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Description is required' },
        notEmpty: { msg: 'Description is required' },
      }
    }
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
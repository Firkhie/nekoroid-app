'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manufacturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Manufacturer.hasMany(models.Item, { foreignKey: 'ManufacturerId' })
    }
  }
  Manufacturer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: 'Manufacturer already exists' },
      validate: {
        notNull: { msg: 'Manufacturer name is required' },
        notEmpty: { msg: 'Manufacturer name is required' }
      }
    },
  }, {
    sequelize,
    modelName: 'Manufacturer',
  });
  return Manufacturer;
};
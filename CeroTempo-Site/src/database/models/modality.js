'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Modality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Modality.hasMany(models.Course, {
        as: 'mode',
        foreignKey: 'modeId'
      })
    }
  }
  Modality.init({
    name: DataTypes.STRING(25)
  }, {
    sequelize,
    modelName: 'Modality',
  });
  return Modality;
};
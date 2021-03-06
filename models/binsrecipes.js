'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class binsRecipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  binsRecipes.init({
    recipeId: DataTypes.INTEGER,
    binId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'binsRecipes',
  });
  return binsRecipes;
};
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Foods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Foods.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      foodName: DataTypes.STRING,
      foodRating: DataTypes.DECIMAL,
      foodPrice: DataTypes.DECIMAL,
      foodImage: DataTypes.STRING,
      restaurantName: DataTypes.STRING,
      restaurantImage: DataTypes.STRING,
      restaurantStatus: DataTypes.ENUM("closed", "open"),
    },
    {
      sequelize,
      modelName: "Foods",
    }
  );
  return Foods;
};

"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Foods", {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      foodName: {
        type: Sequelize.STRING,
      },
      foodRating: {
        type: Sequelize.DECIMAL,
      },
      foodPrice: {
        type: Sequelize.DECIMAL,
      },
      foodImage: {
        type: Sequelize.STRING,
      },
      restaurantName: {
        type: Sequelize.STRING,
      },
      restaurantImage: {
        type: Sequelize.STRING,
      },
      restaurantStatus: {
        type: Sequelize.ENUM("closed", "open"),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Foods");
  },
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      title: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      rating: {
        type: Sequelize.DECIMAL(3, 1).UNSIGNED,
        allowNull: false
      },
      awards: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      release_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      length: {
        type: Sequelize.INTEGER
      },
      genre_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'genres',
          key: 'id'
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('movies');
  }
};

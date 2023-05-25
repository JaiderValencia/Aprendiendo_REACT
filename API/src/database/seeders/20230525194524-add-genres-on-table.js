'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('genres', [
      {
        name: 'Comedia',
        ranking: 1,
        active: 1
      },
      {
        name: 'Terror',
        ranking: 2,
        active: 1
      },
      {
        name: 'Drama',
        ranking: 3,
        active: 1
      },
      {
        name: 'Acción',
        ranking: 4,
        active: 1
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('genres', null, {});
    await queryInterface.sequelize.query(
      'ALTER TABLE genres AUTO_INCREMENT = 1'
    );
  }
};

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
    await queryInterface.bulkInsert('movies', [
      {
        title: 'Avatar',
        rating: 7.9,
        awards: 3,
        release_date: '2010-10-04 00:00:00',
        length: 120,
        genre_id: 4
      },
      {
        title: 'Titanic',
        rating: 7.7,
        awards: 11,
        release_date: '1997-09-04 00:00:00',
        length: 320,
        genre_id: 3
      },
      {
        title: 'La Guerra de las galaxias: Episodio VI',
        rating: 9.1,
        awards: 7,
        release_date: '2004-07-04 00:00:00',
        length: 310,
        genre_id: 4
      },
      {
        title: 'La vida es bella',
        rating: 8.3,
        awards: 5,
        release_date: '1994-10-04 00:00:00',
        length: 100,
        genre_id: 3
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
    await queryInterface.bulkDelete('movies', null, {});
    await queryInterface.sequelize.query(
      'ALTER TABLE movies AUTO_INCREMENT = 1'
    );
  }
};

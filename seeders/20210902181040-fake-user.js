/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, DataTypes) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      email: 'test@gmail.com',
      role: 'admin',
      uuid: '69ba4537-fbd9-4dc5-8cc4-7450442522c3',
      createdAt: '2021-09-02T16:40:28.890Z',
      updatedAt: '2021-09-02T18:07:07.753Z',
    }], {});
    await queryInterface.bulkInsert('users', [{
      name: 'Jane Doe',
      email: 'test@gmail.com',
      role: 'admin',
      uuid: '69ba4537-fbd9-4dc5-8cc4-74504425222f',
      createdAt: '2021-09-02T16:40:28.890Z',
      updatedAt: '2021-09-02T18:07:07.753Z',
    }], {});
  },

  down: async (queryInterface, DataTypes) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Tasks', 'dueAt', Sequelize.DATE);
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('Tasks', 'dueAt');
  }
};

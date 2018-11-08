'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    //addColumn(table: String, key: String, attribute: Object, options: Object): Promise
    queryInterface.addColumn('grocery_items', 'store', {
      type: Sequelize.INTEGER,
      references: {
          model: 'grocery_stores',
          key: 'id'
        }
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    // removeColumn(tableName: String, attributeName: String, options: Object): Promise
    queryInterface.removeColumn('grocery_items', 'store')
  }
};

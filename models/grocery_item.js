'use strict';
module.exports = (sequelize, DataTypes) => {
  const grocery_item = sequelize.define('grocery_item', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    qty: DataTypes.INTEGER,
    store: DataTypes.INTEGER
  }, {});
  grocery_item.associate = function(models) {
    // associations can be defined here
    grocery_item.belongsTo(models.grocery_store, {foreignKey: 'id', as: 'groceryStore'})
  };
  return grocery_item;
};

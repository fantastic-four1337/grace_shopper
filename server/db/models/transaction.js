const Sequelize = require('sequelize');
const db = require('../db');

const Transaction = db.define('transaction', {
  billingAddress: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  shippingAddress: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  cardHolder: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cardType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cardNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  expirationDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  csv: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Transaction;

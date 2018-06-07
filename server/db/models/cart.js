const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
    subTotal: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    tax: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})


module.exports = Cart

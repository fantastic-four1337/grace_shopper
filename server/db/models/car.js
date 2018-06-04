const Sequelize = require("sequelize");
const db = require("../db");

const Car = db.define("car", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: null
  },
  specification: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  rating: {
    type: Sequelize.ARRAY(Sequelize.NUMBER)
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F83%2F6d%2F7f%2F836d7f6a722ff02419f9cae5ef6c4693.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F408560997420949071%2F&docid=44R6cyJB5jhcjM&tbnid=cC5YC8X5_wMT3M%3A&vet=10ahUKEwjd4KX_47rbAhWp6IMKHbBrC6UQMwj4ASgBMAE..i&w=1224&h=792&bih=803&biw=1440&q=car%20template&ved=0ahUKEwjd4KX_47rbAhWp6IMKHbBrC6UQMwj4ASgBMAE&iact=mrc&uact=8"
  },
  country: {
    type: Sequelize.STRING
  }
});

module.exports = Car;

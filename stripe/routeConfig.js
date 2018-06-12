const paymentProcessor = require('./payment');

const configureRoutes = app => {
  paymentProcessor(app);
};

module.exports = configureRoutes;

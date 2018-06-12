const configureStripe = require('stripe');

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === 'production'
<<<<<<< HEAD
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_NTvaNwpN9DHMgrYbIPkXIy1K';
=======
    ? process.env.STRIPE_SECRET_KEY
    : process.env.STRIPE_SECRET_KEY;
>>>>>>> master

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;

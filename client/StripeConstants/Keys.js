//If you do not have account with Stripe, need to make one to obtain api key.

export const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://car-gurus.herokuapp.com/'
    : 'http://localhost:3000';

export const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_test_lxX7WcVZ2WB0ZffLgO7FDtu8'
    : 'pk_test_lxX7WcVZ2WB0ZffLgO7FDtu8';

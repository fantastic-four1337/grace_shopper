//If you do not have account with Stripe, need to make one to obtain api key.

export const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://car-gurus.herokuapp.com/'
    : 'https://localhost:3000';

export const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_live_MY_PUBLISHABLE_KEY'
    : 'pk_test_VlMT6y4ZJHialX7BHc5K5Lwn';

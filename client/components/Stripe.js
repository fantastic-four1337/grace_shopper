// PAYMENT_SERVER_URL === localhost:3000

import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import {
  PAYMENT_SERVER_URL,
  STRIPE_PUBLISHABLE
} from '../StripeConstants/Keys';

const dollar = amount => amount * 100;

const successPayment = data => alert('Payment Processed. Thank you.');
const errorPayment = data =>
  alert(
    'Payment Declined. Please use different source. If problem persists, please contact bank or your financial institution.'
  );

const onToken = (amount, description) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: 'USD',
      amount: dollar(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Stripe = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={dollar(amount)}
    token={onToken(amount, description)}
    currency="USD"
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Stripe;

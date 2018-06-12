const stripe = require('./stripeConstant');

const postCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
};

const paymentProcessor = app => {
  app.get('/', (req, res) => {
    res.send({
      message: 'Here is payment',
      timestamp: new Date().toISOString()
    });
  });

  app.post('/', (req, res) => {
    stripe.charge.create(req.body, postCharge(res));
  });

  return app;
};

module.exports = paymentProcessor;

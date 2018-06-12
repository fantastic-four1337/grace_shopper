const router = require('express').Router();
const { Car } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const cars = await Car.findAll();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get('/:carId', async (req, res, next) => {
  try {
    const singleCar = await Car.findById(req.params.carId);
    res.json(singleCar);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newCar = await Car.create(req.body);
    res.json(newCar);
  } catch (err) {
    next(err);
  }
});

router.put('/:carId', async (req, res, next) => {
  try {
    const targetCar = await Car.findById(req.params.carId);
      const updatedCar = await targetCar.setCart(req.body.cartId);
      res.json(updatedCar);
  } catch (err) {
    res.status(500).send('Missing necessary information.');
    next(err);
  }
});

router.delete('/:carId', async (req, res, next) => {
  try {
    await Car.destroy({
      where: {
        id: req.params.carId
      }
    });
    res.sendStatus(204).end()
  } catch (err) {
    next(err);
  }
});

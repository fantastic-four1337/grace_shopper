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
    if (req.body.name) {
      const updatedCar = await targetCar.update(req.body);
      res.json(updatedCar);
    } else {
      res.status(500).send('Missing necessary information.');
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/:carId', async (req, res, next) => {
  try {
    const deletedCar = await Car.destroy({
      where: {
        id: req.params.carId
      }
    });
    res.json(deletedCar);
  } catch (err) {
    next(err);
  }
});

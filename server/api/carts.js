const router = require('express').Router()
const {Cart} = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const userCart = await Cart.findById(req.params.userId)
    res.json(userCart)
  } catch (err) {
      next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newCart = await Cart.create(req.body)
    res.json(newCart)
  } catch (err) {
      next(err)
  }
})

router.put('/:userId', async (req, res, next) => {
  try {
    const cart = await Cart.findById(req.params.userId)
    const updatedCart = await cart.update(req.body)
    res.json(updatedCart)
  } catch (err) {
      next(err)
  }
})

router.delete('/:userId', async (req, res, next) => {
  try {
    const cart = await Cart.findById(req.params.userId)
    await cart.destroy(req.body)
    res.status(204).end()
  } catch (err) {
      next(err)
  }
})


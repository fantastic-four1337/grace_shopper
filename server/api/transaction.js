const router = require('express').Router()
const {Transaction} = require('../db/models')
module.exports = router

router.get('/:cartId', async (req, res, next) => {
  try {
    const userCart = await Transaction.findById(req.params.cartId)
    res.json(userCart)
  } catch (err) {
      next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newTransaction = await Transaction.create(req.body)
    res.json(newTransaction)
  } catch (err) {
      next(err)
  }
})

router.put('/:cartId', async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.cartId)
    const updatedTransaction = await transaction.update(req.body)
    res.json(updatedTransaction)
  } catch (err) {
      next(err)
  }
})

router.delete('/:cartId', async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.cartId)
    await transaction.destroy(req.body)
    res.status(204).end()
  } catch (err) {
      next(err)
  }
})


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

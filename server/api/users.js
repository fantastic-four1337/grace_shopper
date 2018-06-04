const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
    res.json(user)
  } catch (err) {
      next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch (err) {
      next(err)
  }
})

router.put('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
    const updatedUser = await user.update(req.body)
    res.json(updatedUser)
  } catch (err) {
      next(err)
  }
})

router.delete('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
    await user.destroy(req.body)
    res.status(204).end()
  } catch (err) {
      next(err)
  }
})

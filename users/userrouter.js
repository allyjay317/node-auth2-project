const router = require('express').Router()
const restricted = require('../api/restricted-middleware')
const db = require('./user-model')

router.use('/', restricted)

router.get('/', (req, res, next) => {
  db.getUsers(req.decodedToken.department)
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      next({
        status: 500,
        message: 'Sorry, we encoutered an error while retrieving users'
      })
    })
})


module.exports = router
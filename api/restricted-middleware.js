const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET || 'it\'s a secret to everyone'

module.exports = function (req, res, next) {
  let token = req.headers.authorization

  if (token) {
    token = token.split(' ')[1]
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'You shall not pass!' })
      } else {
        req.decodedToken = decodedToken
        next()
      }
    })
  }
  else {
    res.status(401).json({ message: 'invalid or missing credentials' })
  }
}
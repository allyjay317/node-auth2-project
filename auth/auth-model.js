const db = require('knex')(require('../data/connection'))

function getUserByUsername(username) {
  return db('users')
    .where({ username })
    .first()
    .then(res => {
      console.log(res)
      return res
    })
}

async function createNewUser(user) {
  const id = await db('users')
    .insert(user)
  const newUser = await getUserByUsername(user.username)
  return newUser
}


module.exports = {
  getUserByUsername,
  createNewUser
}
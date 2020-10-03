const db = require('knex')(require('../data/connection'))


function getUsers(department) {
  return db('users')
    .select('id', 'username', 'department')
    .where({ department })
}

module.exports = {
  getUsers
}
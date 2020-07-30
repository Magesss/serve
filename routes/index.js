// base
const BaseIndex = require('./base/index')
const BaseUsers = require('./base/users')

// console.log('BaseIndex', BaseIndex)
// console.log('BaseUsers', BaseUsers)
module.exports.router = [
  // base
  BaseIndex,
  BaseUsers
]

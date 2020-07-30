const jwt = require('jsonwebtoken')
const {TOKEN_KEY, TOKEN_TIME_OUT} = require('../config/tokeKey')


module.exports = (username, pwd) => {
  return jwt.sign({
    time: new Date().getTime(),
    timeout: TOKEN_TIME_OUT,
    username: username,
    pwd: pwd
  }, TOKEN_KEY)
}

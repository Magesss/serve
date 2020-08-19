//toke验证
const jwt = require('jsonwebtoken')
const {TOKEN_KEY} = require('../config/tokeKey')
const createToken = require('./jwt')
const {userModel} = require('./sql')

async function check(ctx, next) {
  if (ctx.url === '/api/login' || ctx.url === '/api/register') {
    await next()
  } else {
    const token = ctx.request.headers["authorization"]
    if (token) {
      const TOKEN = jwt.verify(token, TOKEN_KEY)
      const {time, timeout, pwd, username} = TOKEN
      const data = new Date().getTime()
      //有 token 且没过期
      if(data - time <= timeout) {
        //重写token，更新延期时间,并且更新数据库
        const newToken = createToken(username, pwd)
        await userModel.UPDATA_TABLE({name: username, pwd, token: newToken}).then(async res=> {
          //新token 放到global对象上面，减少服务器请求次数
          global.NEW_USER_TOKEN = {
            [username]: newToken
          }
          console.log(res)
          await next()
        }).catch(err => {
          console.log(err)
        })
      } else {
        //token 超时
        ctx.body = {
          status: 403,
          message: 'toke timeout'
        }
      }
    } else {
      //返回登录页
      ctx.body = {
        status: 403,
        message: 'toke timeout'
      }
    }
  }
}

module.exports = check

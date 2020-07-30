const router = require('koa-router')()
const createToken = require('../../utils/jwt')
const {userModel} = require('../../utils/sql')

router.post('/api/login', async (ctx, next) => {
  const {name, pwd} = ctx.request.body
  console.log(ctx.request.body)
  await userModel.QUERY_TABLE(name, pwd).then(async res => {
    // 账号密码正确
    if (res.length) {
      //创建登录token
      const userToken = createToken(name, pwd)
      //存token
      await userModel.UPDATA_TABLE({name, pwd, token: userToken}).then(async res=> {
        ctx.body = {
          code: 1,
          data: userToken,
          msg: 'success'
        }
        await next()
      }).catch(err => {
        console.log(err)
      })
    } else {
    //账号密码错误
      ctx.status = 403
      ctx.body = {
        code: 0,
        data: []
      }
    }
  }).catch(err => {
    console.log(err)
  })
})
module.exports = router

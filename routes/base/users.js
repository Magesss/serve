const router = require('koa-router')()
const createToken = require('../../utils/jwt')
const {userModel} = require('../../utils/sql')

router.post('/api/login', async (ctx, next) => {
  const {name, pwd} = ctx.request.body
  console.log('request', pwd)
  await userModel.QUERY_TABLE(name).then(async res => {
    // 有账号
    if (res.length) {
      //密码正确
      console.log('mysql', res[0].password)
      if(res[0].password === pwd) {
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
        ctx.body = {
          code: 0,
          msg: '验证不通过',
          data: []
        }
      }
    } else {
    //找不到账号
      ctx.body = {
        code: 0,
        msg: '验证不通过',
        data: []
      }
    }
  }).catch(err => {
    console.log(err)
  })
})
module.exports = router

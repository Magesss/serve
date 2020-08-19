const router = require('koa-router')()
const createToken = require('../../utils/jwt')
const {userModel} = require('../../utils/sql')
// login
router.post('/api/login', async (ctx, next) => {
  const {name, pwd} = ctx.request.body
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

// register
router.post('/api/register', async (ctx, next) => {
  const {username, pwd, surePwd} = ctx.request.body
  const res = await userModel.QUERY_TABLE(username)
  if(res.length) {
    //  已注册过
    ctx.body = {
      code: 0,
      msg: '验证不通过',
      data: []
    }
  }
  else{
    if(pwd !== surePwd) {
      ctx.body = {
        code: 0,
        msg: '验证不通过',
        data: []
      }
      return
    }
    else {
      //  启动注册
      await userModel.INSERT_TABLE({username, password: pwd, createTime: new Date().getTime()}).then(() => {
        ctx.body = {
          code: 1,
          data: [],
          msg: 'success'
        }
      }).catch(() => {
        ctx.body = {
          code: 0,
          data: [],
          msg: 'error'
        }
      })
    }
  }
})



module.exports = router

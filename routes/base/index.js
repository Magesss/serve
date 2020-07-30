const router = require('koa-router')()
const moment = require('moment');
const {userModel} = require('../../utils/sql')

router.post('/api/string', async (ctx, next) => {
  const {name, pwd} = ctx.request.body
  ctx.response.body = {
    code: 1,
    token: global.NEW_USER_TOKEN[name],
    data: 'ceshi'
  }
})


module.exports = router

const router = require('koa-router')()
const moment = require('moment');
const {userModel} = require('../../utils/sql')

router.get('/index.html', async (ctx) => {
  ctx.render('index')
})


module.exports = router

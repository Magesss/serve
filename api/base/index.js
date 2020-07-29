const {router} = require('../route')

// 路由配置
router.get('/api/getUserInfo', async (ctx, next) => {
  ctx.response.body = 'success'
})
module.exports.router = router

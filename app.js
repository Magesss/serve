//koa 相关
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// 处理 history 模式
const { historyApiFallback } = require('koa2-connect-history-api-fallback')
// cors
const cors = require('koa2-cors')
// route
const {router} = require('./routes')
//mysql
// const mySql = require()

//toke验证
const checkToken = require('./utils/checkToken')

// cors
onerror(app)

app.use(
  cors({
    origin: function(ctx) { //设置允许来自指定域名请求
      return '*'
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
)
app.use(checkToken)
// post 请求
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(historyApiFallback({index: '/index.html', whiteList: ['/api']}))
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
router.forEach(v => {
  app.use(v.routes(), v.allowedMethods())
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

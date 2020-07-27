const koa = require('koa')
const router = require('koa-router')()
const fs = require('fs')
// 导入koa2-cors模块
const cors = require('koa2-cors')

const app = new koa()

const staticHTML = fs.readFileSync('./static/index.html','utf-8');

console.log(staticHTML)
//配置 cors 的中间件
app.use(
  cors({
    origin: function(ctx) { //设置允许来自指定域名请求
      if (ctx.url === '/test') {
        return '*'; // 允许来自所有域名请求
      }
      return 'http://localhost:8080'; //只允许http://localhost:8080这个域名的请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
)

router.get('/', async (ctx) => {
  ctx.body = staticHTML;
})

app.use(router.routes())
app.use(router.allowedMethods());

app.listen(8080)

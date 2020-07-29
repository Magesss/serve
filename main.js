// 引入接口
const {router} = require('./api/index')
//导入模块
const koa = require('koa')
// 导入koa2-cors模块
const cors = require('koa2-cors')
const path = require('path')

const Static = require('koa-static')
const { historyApiFallback } = require('koa2-connect-history-api-fallback')

// 实例化模块对象
const app = new koa()




//配置 cors 的中间件
app.use(
  cors({
    origin: function(ctx) { //设置允许来自指定域名请求
      console.log(1111111111111111111111111111111111111111111111111111111)
      console.log(ctx)
      // if (ctx.url.substring(0, 5) === '/api/') {
      //   console.log(ctx)
      //   return '*'; // 允许来自所有域名请求
      // }
      // return 'http://localhost:8080'; //只允许http://localhost:8080这个域名的请求
      return '*';
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
)
.use(historyApiFallback({index: '/index.html', whiteList: ['/api']}))
.use(Static(path.join( __dirname, '/public')))


app.use(router.routes())
app.use(router.allowedMethods());

app.listen(3000)

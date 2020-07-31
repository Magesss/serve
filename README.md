#### 图片库服务端代码(node+koa2)
    需要过滤的文件在.gitignore文件中添加忽略规则
    例如 www/api/managerApi/runtime/

#### 开发说明
- 	采用 node+koa脚手架+mysql+jwt验证

```

```
- 	

```

```

#### 路由

-   前端路由自己管理，采用history模式，发起请求需要加/api

```
useEffect(() => {
    fetch('/string',{
      method:'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'authorization': token
      },
      body: 'name=admin&pwd=123456'
    })
      .then(res=> res.json())
      .then(res => {
        console.log(res)
      })
  })  
```

-   controller中命名空间为

```
    namespace article\v1\controllers;
```

#### 返回格式
-   

```
    {
        code: 401,
        message: "您的登录验证已经过期，请重新登录",
        data: [ ]
    }
```
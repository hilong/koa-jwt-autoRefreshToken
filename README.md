# 中间件介绍
在使用koa开发中，使用koa-jwt(jsonwebtoken)作为用户权限验证，设置有效期可以在很短的情况下，为
了更好的前端体验，增加了自动刷新token的中间件

## 注意事项
此中间件基于koa-jwt(jsonwebtoken),在解析token时需要用到ctx.state.user,user是koa-jwt可
设置项，默认为user,jwt签约时需要用到有效截止日期(exp)、加密密码(secret)

此中间件最好放到koa-jwt和路由中间件之间，因为koa是洋葱模型，具体的请看koa文档

前端使用需要全局拦截http请求，对响应的数据进行判断当出现refreshToken可以保存并替换旧的token,
应该可以在
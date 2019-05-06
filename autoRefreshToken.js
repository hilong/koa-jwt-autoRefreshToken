'use strict';
/**
 * 自动刷新Token中间件，在token失效前60秒内的请求添加上新的token
 */
const JWT = require('jsonwebtoken');//引入jsonwebtoken
const MSConfig = {
    JWT_EXPIRES: 1800,//Token有效期30分钟
    JWT_SECRET : 'token加密密码'//任意字符串示例
};

module.exports = (opts ={}) => {
    const { isAuto = true, time = 60 } = opts;
    const middleware = async function autoRefreshToken(ctx, next){
        let state = ctx.state || {};
        if(isAuto && state.user){
            let exp = state.user.exp || 0,//token有效截止日期秒数
                cti = Math.floor(Date.now() / 1000);//当前日期秒数
            if(exp - cti < time && exp - cti > 0){
                //添加新生成的refreshToken到ctx中
                ctx.refreshToken = JWT.sign({
                    uid: state.user.uid, //用户的唯一标示|状态|角色
                    exp: exp - time + MSConfig.JWT_EXPIRES
                }, MSConfig.JWT_SECRET);
                console.log(ctx.refreshToken)
            }
        }

        await next();
        if(ctx.refreshToken){
            ctx.response.body.refreshToken = ctx.refreshToken;
        }
    }
    return middleware
}
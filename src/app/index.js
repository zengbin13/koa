const Koa = require('koa');
const app = new Koa();

const userRouter = require('../router/user.route.js');
app.use(userRouter.routes());

module.exports = app;

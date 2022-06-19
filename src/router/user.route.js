const Router = require('@koa/router');
const router = Router({ prefix: '/users' });

const { register, login } = require('../controller/user.controller.js');

// 用户注册
router.post('/register', register);

// 用户登录
router.post('/login', login);

module.exports = router;

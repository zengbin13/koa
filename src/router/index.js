const Router = require('@koa/router');

const router = Router({});

router.get('/', (ctx) => {
  ctx.body = 'hhhh11';
});

module.exports = router;

import Router from 'koa-router';

const router = new Router({
	prefix: '/auth'
});


router.get('/signin', (ctx, next) => {
	// ctx.body = books;
	next();
});
router.get('/signup', (ctx, next) => {
	ctx.response.status = 404;
	ctx.body = 'Book Not Found';
	next();
})


export default router.routes();
import Router from 'koa-router';
import * as UserModel from '../models/user_profiles.js';

const router = new Router({
	prefix: '/user_profiles'
});

router.get('/', async (ctx, next) => {
	const allUsers = await UserModel.getAll();
	ctx.body = { user_profiles: allUsers };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await UserModel.getUserById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'User Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	const { name, email, from_name, reply_to_email, signature, timezone, password } = ctx.request.body;
	if (!name) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await UserModel.add({
			name, email, from_name, reply_to_email, signature, timezone, password
		});
		ctx.response.status = 201;
		ctx.body = result;
	}
	next();
});
router.put('/:id', async (ctx, next) => {
	const { name, email, from_name, reply_to_email, signature, timezone, /*password*/ } = ctx.request.body;
	if (!name) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await UserModel.update({
			id: ctx.params.id, name, email, from_name, reply_to_email, signature, timezone, /*password*/
		});
		ctx.response.status = 200;
		ctx.body = result;
	}
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await UserModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();
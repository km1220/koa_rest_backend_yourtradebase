import Router from 'koa-router';
import * as UserModel from '../../models/user/user_profiles.js';

const router = new Router({
	prefix: '/auth'
});

router.post('/login', async (ctx, next) => {
	const { targetEmail, targetPwd, lastLoginAt } = ctx.request.body;
	const data = {
		email: targetEmail,
		pwd: targetPwd,
		last_login_at: lastLoginAt,
	}

	// UserModel.handleLogin(data).then(result => {
	// 	if (result.id) {
	// 		ctx.response.status = 200;
	// 		ctx.body = { user_data: result };
	// 	} else {
	// 		ctx.response.status = 404;
	// 		ctx.body = 'User Not Found';
	// 	}
	// }).catch(err => {
	// 	console.log('first             ', err);
	// });

	const result = await UserModel.handleLogIn(data);
	if (!result.id || result.status === 'failed') {
		ctx.response.status = 404;
		ctx.body = result;
	} else {
		ctx.response.status = 200;
		ctx.body = { user_data: result };
	}
	next();
})


router.post('/signup', async (ctx, next) => {
	const { name, email, pwd } = ctx.request.body;

	const result = await UserModel.handleSignUp({ name: name, email: email, password: pwd });
	if (!result.id || result.status === 'failed') {
		ctx.response.status = 404;
		ctx.body = result;
	} else {
		ctx.response.status = 200;
		ctx.body = { user_data: result };
	}
	next();
})


router.put('/update_pwd/:id', async (ctx, next) => {
	const { old_pwd, new_pwd } = ctx.request.body;
	const result = await UserModel.updatePassword({ id: ctx.params.id, oldPwd: old_pwd, newPwd: new_pwd });
	if (!result.affectedRows || result.status === 'failed') {
		ctx.response.status = 404;
	} else {
		ctx.response.status = 200;
	}
	ctx.body = result;
	next();
})



export default router.routes();
import Router from 'koa-router';
import * as TeamMemberModel from '../models/team_members.js';

const router = new Router({
	prefix: '/team_members'
});

router.get('/', async (ctx, next) => {
	const params = ctx.request.query;
	const allTeamMembers = await TeamMemberModel.getAll(params.user_id);
	ctx.body = { team_members: allTeamMembers };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await TeamMemberModel.getTeamMemberById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'TeamMember Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	const { user_id, name, email, initial_text, initial_color, role, permissions } = ctx.request.body;
	if (!name) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await TeamMemberModel.add({
			user_id, name, email, initial_text, initial_color, role, permissions
		});
		ctx.response.status = 201;
		ctx.body = result;
	}
	next();
});
router.put('/:id', async (ctx, next) => {
	const { user_id, name, email, initial_text, initial_color, role, permissions } = ctx.request.body;
	if (!name) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await TeamMemberModel.update({
			id: ctx.params.id, user_id, name, email, initial_text, initial_color, role, permissions
		});
		ctx.response.status = 200;
		ctx.body = result;
	}
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await TeamMemberModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();
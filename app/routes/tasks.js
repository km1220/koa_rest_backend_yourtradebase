import Router from 'koa-router';
import * as TaskModel from '../models/tasks.js';

const router = new Router({
	prefix: '/tasks'
});

router.get('/', async (ctx, next) => {
	const allTasks = await TaskModel.getAll();
	ctx.body = { tasks: allTasks };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await TaskModel.getTaskById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'Task Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	const { title, desc, due, job_id } = ctx.request.body;
	if (!title) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await TaskModel.add({
			title, desc, due, job_id
		});
		ctx.response.status = 201;
		ctx.body = result;
	}
	next();
});
router.put('/:id', async (ctx, next) => {
	const { title, desc, due, job_id } = ctx.request.body;
	if (!title) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await TaskModel.update({
			id: ctx.params.id, title, desc, due, job_id
		});
		ctx.response.status = 200;
		ctx.body = result;
	}
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await TaskModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();
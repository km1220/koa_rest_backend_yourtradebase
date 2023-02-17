import Router from 'koa-router';
import * as TodoModel from '../models/todo.js';

const router = new Router({
	prefix: '/todo'
});

router.get('/', async (ctx, next) => {
	const allTodos = await TodoModel.getAll();
	ctx.body = { todos: allTodos };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await TodoModel.getTodoById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'Todo Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	if (!ctx.request.body.content || ctx.request.body.is_done === undefined) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await TodoModel.add({
			content: ctx.request.body.content,
			is_done: ctx.request.body.is_done
		});
		ctx.response.status = 201;
		ctx.body = result;
	}
	next();
});
router.put('/:id', async (ctx, next) => {
	if (!ctx.request.body.content || ctx.request.body.is_done === undefined) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await TodoModel.update({
			id: ctx.params.id,
			content: ctx.request.body.content,
			is_done: ctx.request.body.is_done
		});
		ctx.response.status = 200;
		ctx.body = result;
	}
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await TodoModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();
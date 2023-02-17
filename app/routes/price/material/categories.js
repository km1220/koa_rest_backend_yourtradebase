import Router from 'koa-router';
import * as CategoryModel from '../../../models/price/material/categories.js';

const router = new Router({
	prefix: '/categories'
});

router.get('/', async (ctx, next) => {
	const allCategorys = await CategoryModel.getAll();
	ctx.body = { categories: allCategorys };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await CategoryModel.findById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'Category Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	const { name } = ctx.request.body;
	if (!name) {
		ctx.throw(400, 'Please enter data');
	} else {
		const isTargetExist = await CategoryModel.findByName(name);
		if (isTargetExist) {
			ctx.response.status = 400;
			ctx.body = "The category is already exist."
		} else {
			const result = await CategoryModel.add({ name });
			ctx.response.status = 201;
			ctx.body = result;
		}
	}
	next();
});
router.put('/:id', async (ctx, next) => {
	const { name } = ctx.request.body;
	if (!name) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await CategoryModel.update({ id: ctx.params.id, name });
		ctx.response.status = 200;
		ctx.body = result;
	}
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await CategoryModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();
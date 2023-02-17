import Router from 'koa-router';
import * as MaterialModel from '../../../models/price/material/materials.js';

const router = new Router({
	prefix: '/materials'
});

router.get('/', async (ctx, next) => {
	const allMaterials = await MaterialModel.getAll();
	ctx.body = { materials: allMaterials };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await MaterialModel.findById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'Material Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	const { product_code, title, price, foreach, markup, brand, category_id } = ctx.request.body;
	if (!title) {
		ctx.throw(400, 'Please enter data');
	} else {
		const isTargetExist = await MaterialModel.findByTitle(title);
		if (isTargetExist) {
			ctx.response.status = 400;
			ctx.body = "The material is already exist."
		} else {
			const result = await MaterialModel.add({ product_code, title, price, foreach, markup, brand, category_id });
			ctx.response.status = 201;
			ctx.body = result;
		}
	}
	next();
});
router.put('/:id', async (ctx, next) => {
	const { product_code, title, price, foreach, markup, brand, category_id } = ctx.request.body;
	if (!title) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await MaterialModel.update({ id: ctx.params.id, product_code, title, price, foreach, markup, brand, category_id });
		ctx.response.status = 200;
		ctx.body = result;
	}
	next();
});
router.delete('/:id', async (ctx, next) => {
	console.log(ctx.params);

	const result = await MaterialModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();
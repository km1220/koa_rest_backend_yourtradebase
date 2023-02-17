import Router from 'koa-router';
import * as PriceListModel from '../../models/price/priceLists.js';

const router = new Router({
	prefix: '/price_lists'
});

router.get('/', async (ctx, next) => {
	const allPriceLists = await PriceListModel.getAll();
	ctx.body = { price_lists: allPriceLists };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await PriceListModel.findById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'price list Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	const { title, content, material_list, labour_list, price } = ctx.request.body;
	if (!title) {
		ctx.throw(400, 'Please enter data');
	} else {
		const isTargetExist = await PriceListModel.findByTitle(title);
		if (isTargetExist) {
			ctx.response.status = 403;
			ctx.body = "The price list is already exist."
		} else {
			const result = await PriceListModel.add({ title, content, material_list, labour_list, price });
			ctx.response.status = 201;
			ctx.body = result;
		}
	}
	next();
});
router.put('/:id', async (ctx, next) => {
	const { title, content, material_list, labour_list, price } = ctx.request.body;
	if (!title) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await PriceListModel.update({ id: ctx.params.id, title, content, material_list, labour_list, price });
		ctx.response.status = 200;
		ctx.body = result;
	}
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await PriceListModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();
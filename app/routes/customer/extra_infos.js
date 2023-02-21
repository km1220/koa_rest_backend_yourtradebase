import Router from 'koa-router';
import * as CustomerExtraInfoModel from '../../models/customer/extra_infos.js';

const router = new Router({
	prefix: '/customer/extra_infos'
});

router.get('/', async (ctx, next) => {
	const allCustomerExtraInfos = await CustomerExtraInfoModel.getAll();
	ctx.body = { extra_infos: allCustomerExtraInfos };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await CustomerExtraInfoModel.getCustomerExtraInfoById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'CustomerExtraInfo Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	const { data } = ctx.request.body;
	if (!data) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await CustomerExtraInfoModel.add({ data });
		ctx.response.status = 201;
		ctx.body = result;
	}
	next();
});
router.put('/:id', async (ctx, next) => {
	const { data } = ctx.request.body;
	if (!data) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await CustomerExtraInfoModel.update({ id: ctx.params.id, data });
		ctx.response.status = 200;
		ctx.body = result;
	}
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await CustomerExtraInfoModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();
import Router from 'koa-router';
import * as LabourModel from '../../models/price/labours.js';

const router = new Router({
	prefix: '/labours'
});

router.get('/', async (ctx, next) => {
	const allLabours = await LabourModel.getAll();
	ctx.body = { labours: allLabours };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await LabourModel.findById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'Labour Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	const { title, price, per, markup } = ctx.request.body;
	if (!title) {
		ctx.throw(400, 'Please enter data');
	} else {
		const isTargetExist = await LabourModel.findByTitle(title);
		if (isTargetExist) {
			ctx.response.status = 400;
			ctx.body = "The labour is already exist."
		} else {
			const result = await LabourModel.add({ title, price, per, markup });
			ctx.response.status = 201;
			ctx.body = result;
		}
	}
	next();
});
router.put('/:id', async (ctx, next) => {
	const { title, price, per, markup } = ctx.request.body;
	if (!title) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await LabourModel.update({ id: ctx.params.id, title, price, per, markup });
		console.log(result)
		ctx.response.status = 201;
		ctx.body = result;
	}
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await LabourModel.remove(ctx.params.id);
	ctx.response.status = 201;
	ctx.body = result;
	next();
});

export default router.routes();
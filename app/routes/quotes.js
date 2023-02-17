import Router from 'koa-router';
import * as QuoteModel from '../models/quotes.js';

const router = new Router({
	prefix: '/quotes'
});

router.get('/', async (ctx, next) => {
	const allQuotes = await QuoteModel.getAll();
	ctx.body = { quotes: allQuotes };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await QuoteModel.getQuoteById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'Quote Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	const { pricelist_data_list, company_name, building_number, post_code, email, phone } = ctx.request.body;
	if (!company_name) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await QuoteModel.add({
			pricelist_data_list, company_name, building_number, post_code, email, phone
		});
		ctx.response.status = 201;
		ctx.body = result;
	}
	next();
});
router.put('/:id', async (ctx, next) => {
	const { pricelist_data_list, company_name, building_number, post_code, email, phone } = ctx.request.body;
	if (!company_name) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await QuoteModel.update({
			id: ctx.params.id, pricelist_data_list, company_name, building_number, post_code, email, phone
		});
		ctx.response.status = 200;
		ctx.body = result;
	}
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await QuoteModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();
import Router from 'koa-router';
import * as CustomerModel from '../models/customers.js';

const router = new Router({
	prefix: '/customers'
});

router.get('/', async (ctx, next) => {
	const allCustomers = await CustomerModel.getAll();
	ctx.body = { customers: allCustomers };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await CustomerModel.getCustomerById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'Customer Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	const { full_name, friendly_name, company_name, address, post_code, contact_info_list, extra_info_list, invoice_due_in } = ctx.request.body;
	if (!company_name) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await CustomerModel.add({
			full_name, friendly_name, company_name, address, post_code, contact_info_list, extra_info_list, invoice_due_in
		});
		ctx.response.status = 201;
		ctx.body = result;
	}
	next();
});
router.put('/:id', async (ctx, next) => {
	const { full_name, friendly_name, company_name, address, post_code, contact_info_list, extra_info_list, invoice_due_in } = ctx.request.body;
	if (!company_name) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await CustomerModel.update({
			id: ctx.params.id, full_name, friendly_name, company_name, address, post_code, contact_info_list, extra_info_list, invoice_due_in
		});
		ctx.response.status = 200;
		ctx.body = result;
	}
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await CustomerModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();
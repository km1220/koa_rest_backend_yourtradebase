import Router from 'koa-router';
import * as InvoiceModel from '../models/invoices.js';

const router = new Router({
	prefix: '/invoices'
});

router.get('/', async (ctx, next) => {
	const allInvoices = await InvoiceModel.getAll();
	ctx.body = { invoices: allInvoices };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await InvoiceModel.getInvoiceById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'Invoice Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	const { invoice_id, toTxt, forTxt,
		type, reference, create_date, due_date, notes, terms,
		pricelist_data_list, discount, total_price,
		customer_id, job_id
	} = ctx.request.body;
	// if (!title) {
	// 	ctx.throw(400, 'Please enter data');
	// } else {
	const result = await InvoiceModel.add({
		invoice_id, toTxt, forTxt,
		type, reference, create_date, due_date, notes, terms,
		pricelist_data_list, discount, total_price,
		customer_id, job_id
	});
	ctx.response.status = 201;
	ctx.body = result;
	// }
	next();
});

// ! not yet implemented
router.put('/:id', async (ctx, next) => {
	const { toTxt, forTxt,
		type, reference, create_date, due_date, notes, terms,
		pricelist_data_list, discount, total_price,
		customer_id, job_id
	} = ctx.request.body;
	// if (!title) {
	// 	ctx.throw(400, 'Please enter data');
	// } else {
	const result = await InvoiceModel.update({
		id: ctx.params.id, invoice_id, toTxt, forTxt,
		type, reference, create_date, due_date, notes, terms,
		pricelist_data_list, discount, total_price,
		customer_id, job_id
	});
	ctx.response.status = 200;
	ctx.body = result;
	// }
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await InvoiceModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();
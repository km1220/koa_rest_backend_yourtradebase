import Router from 'koa-router';
import * as JobModel from '../models/jobs.js';

const router = new Router({
	prefix: '/jobs'
});

router.get('/', async (ctx, next) => {
	const allJobs = await JobModel.getAll();
	ctx.body = { jobs: allJobs };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await JobModel.getJobById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'Job Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	const { job_id, title, status, site_address, site_postcode, customer_id } = ctx.request.body;
	if (!title) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await JobModel.add({
			job_id, title, status, site_address, site_postcode, customer_id
		});
		ctx.response.status = 201;
		ctx.body = result;
	}
	next();
});

// ! not yet implemented
router.put('/:id', async (ctx, next) => {
	const { title, status, site_address, site_postcode, customer_id } = ctx.request.body;
	if (!title) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await JobModel.update({
			id: ctx.params.id, title, status, site_address, site_postcode, customer_id
		});
		ctx.response.status = 200;
		ctx.body = result;
	}
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await JobModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();
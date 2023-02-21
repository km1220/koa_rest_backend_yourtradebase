import Router from 'koa-router';
import * as EmailTemplateModel from '../../models/template/email.js';

const router = new Router({
	prefix: '/templates/email'
});

router.get('/', async (ctx, next) => {
	const allEmailTemplates = await EmailTemplateModel.getAll();
	ctx.body = { email_templates: allEmailTemplates };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await EmailTemplateModel.getEmailTemplateById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'EmailTemplate Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	const { name, subject, body, attached_file_list } = ctx.request.body;
	if (!name) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await EmailTemplateModel.add({
			name, subject, body, attached_file_list
		});
		ctx.response.status = 201;
		ctx.body = result;
	}
	next();
});
router.put('/:id', async (ctx, next) => {
	const { name, subject, body, attached_file_list } = ctx.request.body;
	if (!name) {
		ctx.throw(404, 'Please enter data');
	} else {
		const result = await EmailTemplateModel.update({
			id: ctx.params.id, name, subject, body, attached_file_list
		});
		ctx.response.status = 200;
		ctx.body = result;
	}
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await EmailTemplateModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();
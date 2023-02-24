import Router from 'koa-router';
import * as NotificationModel from '../../models/user/notifications.js';

const router = new Router({
	prefix: '/notifications'
});

router.get('/', async (ctx, next) => {
	const allNotifications = await NotificationModel.getAll();
	ctx.body = { notifications: allNotifications };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await NotificationModel.getNotificationByUserId(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'Notification Not Found';
	}
	next();
})
router.post('/:id', async (ctx, next) => {
	const {
		quote_accepted, online_payment_received, quote_reply_received,
		invoice_reply_received, job_reply_received, customer_reply_received,
		field_team_creates_a_note, field_team_uploads_a_file, field_team_captures_a_job_signature
	} = ctx.request.body;
	if (!quote_accepted) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await NotificationModel.add({
			id: ctx.params.id, quote_accepted, online_payment_received, quote_reply_received,
			invoice_reply_received, job_reply_received, customer_reply_received,
			field_team_creates_a_note, field_team_uploads_a_file, field_team_captures_a_job_signature
		});
		ctx.response.status = 201;
		ctx.body = result;
	}
	next();
});
router.put('/:id', async (ctx, next) => {
	console.log(ctx.request.body)
	const {
		quote_accepted, online_payment_received, quote_reply_received,
		invoice_reply_received, job_reply_received, customer_reply_received,
		field_team_creates_a_note, field_team_uploads_a_file, field_team_captures_a_job_signature
	} = ctx.request.body;
	if (!quote_accepted) {
		ctx.throw(400, 'Please enter data');
	} else {
		const result = await NotificationModel.update({
			id: ctx.params.id, quote_accepted, online_payment_received, quote_reply_received,
			invoice_reply_received, job_reply_received, customer_reply_received,
			field_team_creates_a_note, field_team_uploads_a_file, field_team_captures_a_job_signature
		});
		ctx.response.status = 200;
		ctx.body = result;
	}
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await NotificationModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();
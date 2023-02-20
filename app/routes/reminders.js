import Router from 'koa-router';
import * as ReminderModel from '../models/reminders.js';

const router = new Router({
	prefix: '/reminders'
});

router.get('/', async (ctx, next) => {
	const allReminders = await ReminderModel.getAll();
	ctx.body = { reminders: allReminders };
	next();
});
router.get('/:id', async (ctx, next) => {
	const result = await ReminderModel.getReminderById(ctx.params.id);
	if (result) {
		ctx.body = result;
	} else {
		ctx.response.status = 404;
		ctx.body = 'Reminder Not Found';
	}
	next();
})
router.post('/', async (ctx, next) => {
	const { quote_unsent, quote_need_follow_up, invoice_unsent, invoice_overdue, summary_daily_email, summary_weekly_email, all_unsubscribe } = ctx.request.body;

	const result = await ReminderModel.add({
		quote_unsent, quote_need_follow_up, invoice_unsent, invoice_overdue, summary_daily_email, summary_weekly_email, all_unsubscribe
	});
	ctx.response.status = 201;
	ctx.body = result;
	next();
});
router.put('/:id', async (ctx, next) => {
	const { quote_unsent, quote_need_follow_up, invoice_unsent, invoice_overdue, summary_daily_email, summary_weekly_email, all_unsubscribe } = ctx.request.body;

	const result = await ReminderModel.update({
		id: ctx.params.id, quote_unsent, quote_need_follow_up, invoice_unsent, invoice_overdue, summary_daily_email, summary_weekly_email, all_unsubscribe
	});
	ctx.response.status = 200;
	ctx.body = result;
	next();
});
router.delete('/:id', async (ctx, next) => {
	const result = await ReminderModel.remove(ctx.params.id);
	ctx.response.status = 200;
	ctx.body = result;
	next();
});

export default router.routes();


// * reminder.id === user_profiles.id
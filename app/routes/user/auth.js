import Router from 'koa-router';
import { query } from '../../lib/mysqldb.js';
import * as UserModel from '../../models/user/user_profiles.js';
import * as ReminderModel from '../../models/user/reminders.js';
import * as NotificationModel from '../../models/user/notifications.js';

const router = new Router({
	prefix: '/auth'
});

router.post('/login', async (ctx, next) => {
	const { targetEmail, targetPwd, lastLoginAt } = ctx.request.body;
	const data = {
		email: targetEmail,
		pwd: targetPwd,
		last_login_at: lastLoginAt,
	}

	let result;
	result = await query(`SELECT * FROM user_profiles WHERE \`email\`='${data.email}'`);
	if (result[0]) {
		const userData = result[0];
		if (userData.password === data.pwd) {
			const updateLastLoginDate = await query(`UPDATE user_profiles SET \`last_login_at\`='${data.last_login_at}'WHERE user_profiles.id=${result[0].id}`);
			result = result[0];
		}
		else {
			result = { status: 'failed', message: 'Wrong password.' };
		}
	}
	else {
		result = { status: 'failed', message: 'User not found.' };
	}

	if (!result.id || result.status === 'failed') {
		ctx.response.status = 404;
		ctx.body = result;
	} else {
		ctx.response.status = 200;
		ctx.body = { user_data: result };
	}
	next();
});


router.post('/signup', async (ctx, next) => {
	const { name, email, pwd } = ctx.request.body;
	const userProfileData = {
		name: name, email: email, password: pwd,
		from_name: '', reply_to_email: '', signature: '', timezone: ''
	};
	const initialReminder = {
		quote_unsent: 3, quote_need_follow_up: 3,
		invoice_unsent: 3, invoice_overdue: 3,
		summary_daily_email: true, summary_weekly_email: true, all_unsubscribe: false
	};
	const initialNotification = {
		quote_accepted: `[]`, online_payment_received: `[]`, quote_reply_received: `[]`,
		invoice_reply_received: `[]`, job_reply_received: `[]`, customer_reply_received: `[]`,
		field_team_creates_a_note: `[]`, field_team_uploads_a_file: `[]`, field_team_captures_a_job_signature: `[]`
	};

	let result;
	const findResult = await query(`SELECT * FROM user_profiles WHERE \`email\`='${email}'`);
	if (findResult[0]) {
		result = { status: 'failed', message: 'Already exist.' };
	}
	else {
		let resAddUser = await UserModel.add(userProfileData);
		let resReminders = await ReminderModel.add({ id: resAddUser.insertId, ...initialReminder });
		let resNotification = await NotificationModel.add({ id: resAddUser.insertId, ...initialNotification })

		const insertedUserData = await UserModel.getUserProfileById(resAddUser.insertId);
		result = insertedUserData;
	}

	if (!result.id || result.status === 'failed') {
		ctx.response.status = 404;
		ctx.body = result;
	} else {
		ctx.response.status = 200;
		ctx.body = { user_data: result };
	}
	next();
});








router.put('/update_pwd/:id', async (ctx, next) => {
	const { old_pwd, new_pwd } = ctx.request.body;
	const result = await UserModel.updatePassword({ id: ctx.params.id, oldPwd: old_pwd, newPwd: new_pwd });
	if (!result.affectedRows || result.status === 'failed') {
		ctx.response.status = 404;
	} else {
		ctx.response.status = 200;
	}
	ctx.body = result;
	next();
})



export default router.routes();
import { query } from '../../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM reminders");
}

export const getReminderById = async (id) => {
	const result = await query(`SELECT * FROM reminders WHERE reminders.user_id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}


export const add = async (reminders) => {
	const { id, quote_unsent, quote_need_follow_up, invoice_unsent, invoice_overdue, summary_daily_email, summary_weekly_email, all_unsubscribe } = reminders;
	return await query(`
		INSERT INTO reminders (\`user_id\`,\`quote_unsent\`, \`quote_need_follow_up\`, \`invoice_unsent\`, \`invoice_overdue\`, \`summary_daily_email\`, \`summary_weekly_email\`, \`all_unsubscribe\`) 
			VALUES ('${id}', '${quote_unsent}', '${quote_need_follow_up}', '${invoice_unsent}', '${invoice_overdue}', '${summary_daily_email}', '${summary_weekly_email}', '${all_unsubscribe}')
		`);
}

export const update = async (reminders) => {
	const { id, quote_unsent, quote_need_follow_up, invoice_unsent, invoice_overdue, summary_daily_email, summary_weekly_email, all_unsubscribe } = reminders;
	const isTargetExist = await getReminderById(id);
	if (isTargetExist !== null) {
		return await query(`
			UPDATE reminders 
				SET \`quote_unsent\`='${quote_unsent}', \`quote_need_follow_up\`='${quote_need_follow_up}', 
					\`invoice_unsent\`='${invoice_unsent}', \`invoice_overdue\`='${invoice_overdue}', 
					\`summary_daily_email\`='${summary_daily_email ? 1 : 0}', 
					\`summary_weekly_email\`='${summary_weekly_email ? 1 : 0}', 
					\`all_unsubscribe\`='${all_unsubscribe ? 1 : 0}'
				WHERE reminders.user_id=${id}
			`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM reminders WHERE reminders.user_id='${id}'`);
}
/**
 * * Each column value of this table is
 * ! a list of team_members.id and
 * ? each row.user_id is same with the user_profiles.id 
 */



import { query } from '../../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM notifications");
}

export const getNotificationByUserId = async (id) => {
	const result = await query(`SELECT * FROM notifications WHERE notifications.user_id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}


export const add = async (notifications) => {
	const {
		quote_accepted, online_payment_received, quote_reply_received,
		invoice_reply_received, job_reply_received, customer_reply_received,
		field_team_creates_a_note, field_team_uploads_a_file, field_team_captures_a_job_signature
	} = notifications;
	return await query(`
		INSERT INTO notifications (\`quote_accepted\`, \`online_payment_received\`, \`quote_reply_received\`, 
									\`invoice_reply_received\`, \`job_reply_received\`, \`customer_reply_received\`, 
									\`field_team_creates_a_note\`, \`field_team_uploads_a_file\`, \`field_team_captures_a_job_signature\`) 
			VALUES ('${quote_accepted}','${online_payment_received}','${quote_reply_received}', 
					'${invoice_reply_received}', '${job_reply_received}', '${customer_reply_received}', 
					'${field_team_creates_a_note}','${field_team_uploads_a_file}','${field_team_captures_a_job_signature}')
		`);
}

export const update = async (notifications) => {
	const { id, quote_accepted, online_payment_received, quote_reply_received,
		invoice_reply_received, job_reply_received, customer_reply_received,
		field_team_creates_a_note, field_team_uploads_a_file, field_team_captures_a_job_signature
	} = notifications;
	const isTargetExist = await getNotificationByUserId(id);
	if (isTargetExist !== null) {
		return await query(`
			UPDATE notifications 
				SET \`quote_accepted\`='${quote_accepted}', \`online_payment_received\`='${online_payment_received}', \`quote_reply_received\`='${quote_reply_received}', 
					\`invoice_reply_received\`='${invoice_reply_received}', \`job_reply_received\`='${job_reply_received}', \`customer_reply_received\`='${customer_reply_received}', 
					\`field_team_creates_a_note\`='${field_team_creates_a_note}', \`field_team_uploads_a_file\`='${field_team_uploads_a_file}', \`field_team_captures_a_job_signature\`='${field_team_captures_a_job_signature}' 
				WHERE notifications.user_id=${id}
			`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM notifications WHERE notifications.user_id='${id}'`);
}
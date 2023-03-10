import { query } from '../../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM user_profiles");
}

export const getUserProfileById = async (id) => {
	const result = await query(`SELECT * FROM user_profiles WHERE user_profiles.id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}

export const add = async (user_profiles) => {
	const { name, email, from_name, reply_to_email, signature, timezone, password } = user_profiles;
	return await query(`
		INSERT INTO user_profiles (\`name\`, \`email\`, \`from_name\`, \`reply_to_email\`, \`signature\`, \`timezone\`, \`password\`) 
		VALUES ('${name}','${email}','${from_name}', '${reply_to_email}', '${signature}', '${timezone}', '${password}')
	`);
}

export const update = async (user_profiles) => {
	const { id, name, email, from_name, reply_to_email, signature, timezone, /*password*/ } = user_profiles;
	const isTargetExist = await getUserProfileById(id);
	if (isTargetExist !== null) {
		let strQuery = `UPDATE user_profiles SET `;
		strQuery += name ? `\`name\`='${name}', ` : '';
		strQuery += email ? `\`email\`='${email}', ` : '';
		strQuery += from_name ? `\`from_name\`='${from_name}', ` : '';
		strQuery += reply_to_email ? `\`reply_to_email\`='${reply_to_email}', ` : '';
		strQuery += signature ? `\`signature\`='${signature}', ` : '';
		strQuery += timezone ? `\`timezone\`='${timezone}', ` : '';
		strQuery = strQuery.slice(0, -2);
		strQuery += `WHERE user_profiles.id=${id}`;

		return await query(strQuery);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM user_profiles WHERE user_profiles.id='${id}'`);
}


export const updatePassword = async ({ id, oldPwd, newPwd }) => {
	const findResult = await query(`SELECT * FROM user_profiles WHERE \`id\`='${id}'`);
	if (findResult[0] && findResult[0].password === oldPwd) {
		return await query(`UPDATE user_profiles SET \`password\`='${newPwd}' WHERE user_profiles.id=${findResult[0].id}`);
	}
	else {
		return { status: 'failed', message: 'Old password is incorrect.' };
	}
};
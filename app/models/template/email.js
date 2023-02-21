import { query } from '../../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM email_templates");
}

export const getEmailTemplateById = async (id) => {
	const result = await query(`SELECT * FROM email_templates WHERE email_templates.id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}


export const add = async (email_templates) => {
	const { name, subject, body, attached_file_list } = email_templates;
	return await query(`INSERT INTO email_templates (\`name\`, \`subject\`, \`body\`, \`attached_file_list\`) VALUES ('${name}','${subject}','${body}','${attached_file_list}')`);
}

export const update = async (email_templates) => {
	const { id, name, subject, body, attached_file_list } = email_templates;
	const isTargetExist = await getEmailTemplateById(id);
	if (isTargetExist !== null) {
		return await query(`UPDATE email_templates SET \`name\`='${name}',\`subject\`='${subject}', \`body\`='${body}', \`attached_file_list\`='${attached_file_list}' WHERE email_templates.id=${id}`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM email_templates WHERE email_templates.id='${id}'`);
}
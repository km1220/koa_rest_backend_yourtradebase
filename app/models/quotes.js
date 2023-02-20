import { query } from '../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM quotes");
}

export const getQuoteById = async (id) => {
	const result = await query(`SELECT * FROM quotes WHERE quotes.id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}


export const add = async (quotes) => {
	const { pricelist_data_list, company_name, building_number, post_code, email, phone } = quotes;
	return await query(`
		INSERT INTO quotes (\`pricelist_data_list\`, \`company_name\`, \`building_number\`, \`post_code\`, \`email\`, \`phone\`) 
			VALUES ('${pricelist_data_list}','${company_name}','${building_number}', '${post_code}', '${email}', '${phone}')
		`);
}

export const update = async (quotes) => {
	const { id, pricelist_data_list, company_name, building_number, post_code, email, phone } = quotes;
	const isTargetExist = await getQuoteById(id);
	if (isTargetExist !== null) {
		return await query(`
			UPDATE quotes 
				SET \`pricelist_data_list\`='${pricelist_data_list}', 
					\`company_name\`='${company_name}', 
					\`building_number\`='${building_number}', \`post_code\`='${post_code}', 
					\`email\`='${email}', \`phone\`='${phone}'
				WHERE quotes.id=${id}
			`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM quotes WHERE quotes.id='${id}'`);
}
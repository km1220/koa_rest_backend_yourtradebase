import { query } from '../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM customers");
}

export const getCustomerById = async (id) => {
	const result = await query(`SELECT * FROM customers WHERE customers.id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}


export const add = async (customers) => {
	const { full_name, friendly_name, company_name, address, post_code, contact_info_list, extra_info_list, invoice_due_in } = customers;
	return await query(`
		INSERT INTO customers (\`full_name\`, \`friendly_name\`, \`company_name\`, \`address\`, \`post_code\`, \`contact_info_list\`, \`extra_info_list\`, \`invoice_due_in\`) 
		VALUES ('${full_name}', '${friendly_name}', '${company_name}', '${address}', '${post_code}', '${contact_info_list}', '${extra_info_list}', '${invoice_due_in}')
	`);
}

export const update = async (customers) => {
	const { id, full_name, friendly_name, company_name, address, post_code, contact_info_list, extra_info_list, invoice_due_in } = customers;
	const isTargetExist = await getCustomerById(id);
	if (isTargetExist !== null) {
		return await query(`
			UPDATE customers 
			SET \`full_name\`='${full_name}', 
				\`friendly_name\`='${friendly_name}', 
				\`company_name\`='${company_name}', 
				\`address\`='${address}', 
				\`post_code\`='${post_code}', 
				\`contact_info_list\`='${contact_info_list}', 
				\`extra_info_list\`='${extra_info_list}',
				\`invoice_due_in\`='${invoice_due_in}'
				WHERE customers.id=${id}
		`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM customers WHERE customers.id='${id}'`);
}

// id
// full_name
// friendly_name
// company_name
// address
// post_code
// contact_info_list
// extra_info_list
// invoice_due_in

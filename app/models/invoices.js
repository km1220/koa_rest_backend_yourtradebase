import { query } from '../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM invoices");
}

export const getInvoiceById = async (id) => {
	const result = await query(`SELECT * FROM invoices WHERE invoices.id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}


export const add = async (invoices) => {
	const { invoice_id, toTxt, forTxt,
		type, reference, create_date, due_date, notes, terms,
		pricelist_data_list, discount, total_price,
		customer_id, job_id
	} = invoices;
	return await query(`
		INSERT INTO invoices (\`id\`, \`toTxt\`, \`forTxt\`, 
			\`type\`, \`reference\`, \`create_date\`, \`due_date\`, 
			\`notes\`, \`terms\`, \`pricelist_data_list\`, \`discount\`, \`total_price\`, 
			\`customer_id\`, \`job_id\`) 
		VALUES (${invoice_id}, '${toTxt}', '${forTxt}', 
			'${type}', '${reference}', '${create_date}', '${due_date}', 
			'${notes}', '${terms}', '${pricelist_data_list}', '${discount}', '${total_price}', 
			${customer_id}, ${job_id})
	`);
}



// ! not yet implemented
export const update = async (invoices) => {
	const { id, toTxt, forTxt,
		type, reference, create_date, due_date, notes, terms,
		pricelist_data_list, discount, total_price,
		customer_id, job_id
	} = invoices;
	const isTargetExist = await getInvoiceById(id);
	if (isTargetExist !== null) {
		return await query(`
			UPDATE invoices SET \`toTxt\`='${toTxt}', \`forTxt\`='${forTxt}', \`type\`='${type}', \`reference\`='${reference}', \`create_date\`='${create_date}', \`due_date\`='${due_date}', 
				\`notes\`='${notes}', \`terms\`='${terms}', \`pricelist_data_list\`='${pricelist_data_list}', \`discount\`='${discount}', \`total_price\`='${total_price}', 
				\`customer_id\`=${customer_id}, \`job_id\`=${job_id} 
				WHERE invoices.id=${id}
		`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM invoices WHERE invoices.id='${id}'`);
}
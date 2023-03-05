import { query } from '../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM jobs");
}

export const getJobById = async (id) => {
	const result = await query(`SELECT * FROM jobs WHERE jobs.id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}


export const add = async (jobs) => {
	const { job_id, title, status, site_address, site_postcode, customer_id } = jobs;
	return await query(`
		INSERT INTO jobs (\`id\`, \`title\`, \`status\`, \`site_address\`, \`site_postcode\`, \`customer_id\`) 
		VALUES (${job_id}, '${title}','${status}','${site_address}', '${site_postcode}', ${customer_id})
	`);
}

// ! not yet implemented
export const update = async (jobs) => {
	const { id, title, status, site_address, site_postcode, customer_id } = jobs;
	const isTargetExist = await getJobById(id);
	if (isTargetExist !== null) {
		return await query(`
			UPDATE jobs SET \`title\`='${title}', \`status\`='${status}', \`site_address\`='${site_address}', \`site_postcode\`='${site_postcode}', \`customer_id\`=${customer_id}
			WHERE jobs.id=${id}
		`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM jobs WHERE jobs.id='${id}'`);
}
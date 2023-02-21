import { query } from '../../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM customer_extra_infos");
}

export const getCExtraInfoById = async (id) => {
	const result = await query(`SELECT * FROM customer_extra_infos WHERE customer_extra_infos.id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}


export const add = async (customer_extra_infos) => {
	const { data } = customer_extra_infos;
	return await query(`INSERT INTO customer_extra_infos (\`data\`) VALUES ('${data}')`);
}

export const update = async (customer_extra_infos) => {
	const { id, data } = customer_extra_infos;
	const isTargetExist = await getCExtraInfoById(id);
	if (isTargetExist !== null) {
		return await query(`UPDATE customer_extra_infos SET \`data\`='${data}' WHERE customer_extra_infos.id=${id}`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM customer_extra_infos WHERE customer_extra_infos.id='${id}'`);
}
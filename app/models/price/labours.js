import { query } from '../../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM labours");
}

export const findById = async (id) => {
	const result = await query(`SELECT * FROM labours WHERE labours.id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}


export const add = async (labours) => {
	const { title, price, per, markup } = labours;
	return await query(`
		INSERT INTO labours (\`title\`, \`price\`, \`per\`, \`markup\`) 
		VALUES ('${title}', '${price}', '${per}', '${markup}')
	`);
}

export const update = async (labours) => {
	const { id, title, price, per, markup } = labours;
	const isTargetExist = await findById(id);
	if (isTargetExist !== null) {
		return await query(`
			UPDATE labours 
			SET \`title\`='${title}', \`price\`='${price}', \`per\`='${per}', \`markup\`='${markup}'
			WHERE labours.id=${id}
		`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM labours WHERE labours.id='${id}'`);
}




export const findByTitle = async (title) => {
	const result = await query(`SELECT * FROM labours WHERE labours.title='${title}'`);
	if (result[0]) return result[0]
	return false;
}
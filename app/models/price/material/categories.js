import { query } from '../../../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM categories");
}

export const findById = async (id) => {
	const result = await query(`SELECT * FROM categories WHERE categories.id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}


export const add = async (categories) => {
	const { name } = categories;
	return await query(`
		INSERT INTO categories (\`name\`) VALUES ('${name}')
	`);
}

export const update = async (categories) => {
	const { id, name } = categories;
	const isTargetExist = await findById(id);
	if (isTargetExist !== null) {
		return await query(`
			UPDATE categories SET \`name\`='${name}' WHERE categories.id=${id}
		`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM categories WHERE categories.id='${id}'`);
}




export const findByName = async (name) => {
	const result = await query(`SELECT * FROM categories WHERE categories.name='${name}'`);
	if (result[0]) return result[0]
	return false;
}
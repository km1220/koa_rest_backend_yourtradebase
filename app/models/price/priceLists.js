import { query } from '../../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM price_lists");
}

export const findById = async (id) => {
	const result = await query(`SELECT * FROM price_lists WHERE price_lists.id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}


export const add = async (priceLists) => {
	const { title, content, material_list, labour_list, price } = priceLists;
	return await query(`
		INSERT INTO price_lists (\`title\`, \`content\`, \`material_list\`, \`labour_list\`, \`price\`) 
		VALUES ('${title}', '${content}', '${material_list}', '${labour_list}', '${price}')
	`);
}

export const update = async (priceLists) => {
	const { id, title, content, material_list, labour_list, price } = priceLists;
	const isTargetExist = await findById(id);
	if (isTargetExist !== null) {
		return await query(`
			UPDATE price_lists 
			SET \`title\`='${title}', \`content\`='${content}', 
				\`material_list\`='${material_list}', \`labour_list\`='${labour_list}', \`price\`='${price}'
			WHERE price_lists.id=${id}
		`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM price_lists WHERE price_lists.id='${id}'`);
}




export const findByTitle = async (title) => {
	const result = await query(`SELECT * FROM price_lists WHERE price_lists.title='${title}'`);
	if (result[0]) return result[0]
	return false;
}
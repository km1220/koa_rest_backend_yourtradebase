import { query } from '../../../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM materials");
}

export const findById = async (id) => {
	const result = await query(`SELECT * FROM materials WHERE materials.id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}


export const add = async (materials) => {
	const { product_code, title, price, foreach, markup, brand, category_id } = materials;
	return await query(`
		INSERT INTO materials (\`product_code\`, \`title\`, \`price\`, \`foreach\`, \`markup\`, \`brand\`, \`category_id\`) 
		VALUES ('${product_code}', '${title}', '${price}', '${foreach}', '${markup}', '${brand}', '${category_id}')
	`);
}

export const update = async (materials) => {
	const { id, product_code, title, price, foreach, markup, brand, category_id } = materials;
	const isTargetExist = await findById(id);
	if (isTargetExist !== null) {
		return await query(`
			UPDATE materials 
			SET \`product_code\`='${product_code}', \`title\`='${title}', 
				\`price\`='${price}', \`foreach\`='${foreach}', \`markup\`='${markup}', 
				\`brand\`='${brand}', \`category_id\`='${category_id}'
			WHERE materials.id=${id}
		`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM materials WHERE materials.id='${id}'`);
}




export const findByTitle = async (title) => {
	const result = await query(`SELECT * FROM materials WHERE materials.title='${title}'`);
	if (result[0]) return result[0]
	return false;
}
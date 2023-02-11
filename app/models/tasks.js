import { query } from '../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM tasks");
}

export const getTaskById = async (id) => {
	const result = await query(`SELECT * FROM tasks WHERE tasks.id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}


export const add = async (tasks) => {
	const { title, desc, due, job_id } = tasks;
	return await query(`
		INSERT INTO tasks (\`title\`, \`desc\`, \`due\`, \`job_id\`) 
		VALUES ('${title}','${desc}','${due}', ${job_id})
	`);
}

export const update = async (tasks) => {
	const { id, title, desc, due, job_id } = tasks;
	const isTargetExist = await getTaskById(id);
	if (isTargetExist !== null) {
		return await query(`
			UPDATE tasks SET \`title\`='${title}', \`desc\`='${desc}', \`due\`='${due}', \`job_id\`='${job_id}'
			WHERE tasks.id=${id}
		`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM tasks WHERE tasks.id='${id}'`);
}
import { query } from '../lib/mysqldb.js';


export const getAll = async () => {
	return await query("SELECT * FROM todo");
}

export const getTodoById = async (id) => {
	const result = await query(`SELECT * FROM todo WHERE todo.id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}


export const add = async (todo) => {
	todo.is_done = todo.is_done == undefined ? 0 : todo.is_done;

	todo.date = new Date().toJSON().slice(0, 10);
	return await query(`
		INSERT INTO todo (content, date, is_done) 
		VALUES ('${todo.content}','${todo.date}','${todo.is_done}')
	`);
}

export const update = async (todo) => {
	todo.is_done = todo.is_done == undefined ? 0 : todo.is_done;

	if (todo.id) {
		Object.assign(getTodoById(todo.id), todo);
		return await query(`
			UPDATE todo SET content='${todo.content}',is_done='${todo.is_done}'
			WHERE todo.id=${todo.id}
		`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM todo WHERE todo.id='${id}'`);
}
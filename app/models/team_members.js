import { query } from '../lib/mysqldb.js';


export const getAll = async (user_id) => {
	return await query(`SELECT * FROM team_members WHERE team_members.user_id=${user_id}`);
}

export const getTeamMemberById = async (id) => {
	const result = await query(`SELECT * FROM team_members WHERE team_members.id='${id}'`);
	if (result[0]) {
		return result[0];
	}
	return null;
}



export const add = async (team_members) => {
	const { user_id, name, email, initial_text, initial_color, role, permissions } = team_members;
	return await query(`
		INSERT INTO team_members (\`name\`, \`email\`, \`initial_text\`, \`initial_color\`, \`role\`, \`permissions\`,\`user_id\`) 
		VALUES ('${name}','${email}','${initial_text}', '${initial_color}', '${role}', '${permissions}','${user_id}')
	`);
}

export const update = async (team_members) => {
	const { id, user_id, name, email, initial_text, initial_color, role, permissions } = team_members;
	const isTargetExist = await getTeamMemberById(id);
	if (isTargetExist !== null) {
		return await query(`
			UPDATE team_members 
			SET \`name\`='${name}', \`email\`='${email}', 
				\`initial_text\`='${initial_text}', \`initial_color\`='${initial_color}', 
				\`role\`='${role}', \`permissions\`='${permissions}', 
				\`user_id\`='${user_id}' 
			WHERE team_members.id=${id}
		`);
	} else {
		return false;
	}
}

export const remove = async (id) => {
	return await query(`DELETE FROM team_members WHERE team_members.id='${id}'`);
}
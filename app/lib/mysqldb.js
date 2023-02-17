import { config } from '../config.js';
import mysql from 'promise-mysql';


const mysqlConfig = {
  host: config.mysql.host,
  database: config.mysql.db,
  user: config.mysql.user,
  password: config.mysql.pwd
};

export const query = async (sql) => {
  const connection = await mysql.createConnection(mysqlConfig);
  try {
    const result = connection.query(sql);
    connection.end();
    return result;
  } catch (error) {
    throw error;
  }
}
import mysql from 'promise-mysql';

export const query = async (sql) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "__yourtradebase"
  });
  try {
    const result = connection.query(sql);
    connection.end();
    return result;
  } catch (error) {
    throw error;
  }
}
import postgres from 'postgres';
 
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;
const port = process.env.POSTGRES_PORT;
const db = process.env.POSTGRES_DATABASE;
 
const sql = postgres(`postgres://${user}:${password}@${host}:${port}/${db}`);
 
export default sql;
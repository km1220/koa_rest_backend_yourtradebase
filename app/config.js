import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
// // dotenv.config({ path: '.env.prod' });
// dotenv.config({ path: '.env.dev' });




const config = {
	mode: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3000,

	mysql: {
		host: process.env.DB_HOST || "http://127.0.0.1:3306/",
		db: process.env.DB_NAME || "__yourtradebase",
		user: process.env.DB_USER || "root",
		pwd: process.env.DB_PASSWORD || ""
	}
};

export { config }
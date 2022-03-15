import dotenv from 'dotenv';
dotenv.config();

console.log(process.env);

const configEnv = {
	DBNAME: process.env.DBNAME,
	USERNAME: process.env.USER_NAME,
	PASSWORD: process.env.PASSWORD,
};

export default configEnv;

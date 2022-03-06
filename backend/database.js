import mongoose from 'mongoose';
import configEnv from './config.js';

const URI = `mongodb+srv://${configEnv.USERNAME}:${configEnv.PASSWORD}@cluster0.dg4wm.mongodb.net/${configEnv.DBNAME}?retryWrites=true&w=majority`;

(async () => {
	try {
		await mongoose.connect(URI);
		console.log('DB is connect');
	} catch (e) {
		console.log(e.message);
	}
})();

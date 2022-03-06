import express from 'express';
import morgan from 'morgan';
import './database.js';

import authentication from './routes/login.routes.js';

const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
const port = app.get('port');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', authentication);

app.listen(port, () => {
	console.log('Server on port', port);
});

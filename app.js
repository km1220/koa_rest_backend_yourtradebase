import Koa from 'koa';
// import router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import cors from '@koa/cors';

import AppRoutes from './app/routes/index.js';

const app = new Koa();
const PORT = 1337;
    app.use(helmet());
    app.use(cors());
	app.use(bodyParser());

// app.use(async (ctx) => {
//   ctx.body = {
//     status: 'success',
//     message: 'hello, world!'
//   };
// });
AppRoutes(app);


app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
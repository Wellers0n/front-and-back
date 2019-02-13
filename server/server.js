import koa from 'koa';
import logger from 'koa-logger';
import route from 'koa-router';
import json from 'koa-json';
import bodyParse from 'koa-bodyparser'
import routes from './src/routes/usersRouter.js'
import mongoose from 'mongoose';

//init koa and router
let app = new koa();
let router = new route();

//middlewares
app.use(bodyParse());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(logger());
app.use(json());

mongoose.connect('mongodb://localhost:27017/tinder');

routes(router)

app.listen(3000, () => console.log(`port: ${'localhost:3000'}`))
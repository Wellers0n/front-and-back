import koa from 'koa';
import logger from 'koa-logger';
import route from 'koa-router';
import json from 'koa-json';
import bodyParse from 'koa-bodyparser'
import routes from './src/routes/usersRouter.js'
import mongoose from 'mongoose';
import cors from '@koa/cors';


//init koa and router
let app = new koa();
let router = new route();

//middlewares
app.use(cors());
app.use(bodyParse());
app.use(router.routes());
app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = err.message;
      ctx.app.emit('error', err, ctx);
    }
  });
app.use(router.allowedMethods());
app.use(logger());
app.use(json());

mongoose.connect('mongodb://localhost:27017/tinder');

routes(router)

app.listen(3005, () => console.log(`port: ${'http://localhost:3005'}`))
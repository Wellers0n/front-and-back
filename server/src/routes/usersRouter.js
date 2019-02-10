
import { listAllUsers, loginUser } from './../controllers/usersControllers.js';
import jwt from 'jsonwebtoken';

const authMiddleware = async (ctx, next) => {
  const { authorization } = ctx.request.headers;
  if(!authorization) return ctx.status = 401

  const user = await authorization;
  jwt.verify(user, 'batman', (err, decoded) => {
      if(err) return ctx.status = 401

      ctx.state.user = decoded.id;
      console.log(ctx.state.user)

  })
  await next();
}

export default function(router){

  router.get('/users', authMiddleware, listAllUsers);

  router.post('/user', loginUser);
}



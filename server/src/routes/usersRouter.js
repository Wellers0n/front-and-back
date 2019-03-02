
import { listAllUsers, loginUser, usersMatch } from './../controllers/usersControllers.js';
import auth from './../../auth';

export default function(router){

  router.get('/users', auth, listAllUsers);
  router.get('/usersMatch', auth, usersMatch)
  router.post('/login', loginUser);


}



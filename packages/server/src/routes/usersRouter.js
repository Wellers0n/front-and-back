
import { listAllUsers, loginUser, usersMatch, getUsersLiked } from './../controllers/usersControllers.js';
import auth from './../../auth';

export default function(router){

  router.post('/login', loginUser);
  router.get('/users', auth, listAllUsers);
  router.get('/usersMatch', auth, usersMatch);
  router.get('/getUsersLiked', auth, getUsersLiked);
}


import { listAllUsers, loginUser } from './../controllers/usersControllers.js';
import auth from './../../auth';

export default function(router){

  router.get('/users', auth, listAllUsers);

  router.post('/login', loginUser);
}




import { list_all_users, login_user } from './../controllers/usersControllers.js';

export default function(router){

  router.get('/users', list_all_users);

  router.post('/user', login_user);
}




import { list_all_users } from './../controllers/usersControllers.js'

export default function(router){

  router.get('/users', list_all_users)
}



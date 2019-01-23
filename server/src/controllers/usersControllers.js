import mongoose from 'mongoose';
import Users from './../models/usersModels.js';

export async function list_all_users(ctx) {
  try{
    let user = await Users.find({})
    ctx.body = user

  }catch(err){
    ctx.status = err.status || 500;
    ctx.body = err.message
  }

}

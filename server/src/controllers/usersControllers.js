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

export async function add_user(ctx){
  try{
    let user = await ctx.request.header;
    console.log(user)
    ctx.body = user;
    Users({
      nome: user.nome,
      email: user.email,
      senha: user.senha
    }).save()

  }catch(err){
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
}

import mongoose from 'mongoose';
import Users from './../models/usersModels.js';
import UsersMatch from './../models/usersMatch';
import jwt from 'jsonwebtoken';

export async function listAllUsers(ctx) {
    const user = ctx.state.user;
    if(user) {
        let user = await Users.find({});
        ctx.body = user;

    } else {
        ctx.status = 401;
    }

}

export async function loginUser(ctx) {
    let req = ctx.request.body;
    console.log(req)
    let user = await Users.findOne({email: req.email, senha: req.senha});
    if (user) {
        const id = user._id;
        let token = jwt.sign({id}, 'batman', {
            expiresIn: 300 //5min
        });

        ctx.body = {Authentication: token}
    } else {
        ctx.status = 401
    }

}

export async function usersMatch(ctx){
    const user = ctx.state.user;
    if(user){
        let users = await UsersMatch.find({idGaveLiked: {$eq: user}});
        console.log('aqui: '+users)
        return ctx.body = {hello: 'world'}
    }else{
        ctx.status = 401;
    }
}

import mongoose from 'mongoose';
import Users from './../models/usersModels.js';
import jwt from 'jsonwebtoken';

export async function list_all_users(ctx) {
    try {
        let user = await Users.find({});
        //ctx.body = user;
        console.log(JSON.stringify(ctx.request.body))
        ctx.body = ctx.request;


    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message
    }

}

export async function login_user(ctx) {
    let req = ctx.request.body;
    console.log(req)
    let user = await Users.findOne({email: req.email, senha: req.senha})
    if (user) {
        const id = user._id;
        let token = jwt.sign({id}, 'batman', {
            expiresIn: 300 //expires in 5min
        });

        ctx.body = {result: true, token: token}
    } else {
        ctx.body = {result: false, msg: 'Login invalido!'}
    }

}

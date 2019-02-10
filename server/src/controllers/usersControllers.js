import mongoose from 'mongoose';
import Users from './../models/usersModels.js';
import jwt from 'jsonwebtoken';

export async function listAllUsers(ctx) {
    try {
        let user = await Users.find({});
        ctx.body = user;


    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message
    }

}

export async function loginUser(ctx) {
    let req = ctx.request.body;
    console.log(req)
    let user = await Users.findOne({email: req.email, senha: req.senha})
    if (user) {
        const id = user._id;
        let token = jwt.sign({id}, 'batman', {
            expiresIn: 300 //expires in 5min
        });

        ctx.body = {Authentication: token}
    } else {
        ctx.status = 401
    }

}

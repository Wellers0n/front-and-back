import mongoose from 'mongoose';
import Users from './../models/usersModels.js';
import UsersMatch from './../models/usersMatch.js';
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
            expiresIn: 9000 //1hr
        });

        ctx.body = {Authentication: token}
    } else {
        ctx.status = 401
    }

}

export async function usersMatch(ctx){
    const user = ctx.state.user;
    if(user) {
        let usersMatch = await UsersMatch.find({idGaveLiked: {$eq: user}});
        console.log(usersMatch)
        const $nin = usersMatch.map((item) => {
            return mongoose.Types.ObjectId(item.idReceivedLiked)
        });
        console.log($nin)
        let getUsers = await Users.find({_id: {$nin: [...$nin, user]}})
        ctx.body = getUsers
    } else {
        ctx.status = 401;
    }
}

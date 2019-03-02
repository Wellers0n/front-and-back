import jwt from 'jsonwebtoken';

const authMiddleware = async (ctx, next) => {
    const { authorization } = ctx.request.headers;
    if (authorization) {
        jwt.verify(authorization, 'batman', (err, decoded) => {
            if (err) return ctx.body = 401
            ctx.state.user = decoded.id;
        })
    }else{
        return ctx.status = 403
    }

    await next();

}

export default authMiddleware;
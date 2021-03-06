import express from 'express';

let authenticationMiddleware = (): express.RequestHandler => {
    return ( req, res, next ) => {
        if(req.isAuthenticated())
        next();
        else{
            res.status( 401 ).send();
        }
    }
}
export default authenticationMiddleware;
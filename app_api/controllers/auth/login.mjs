import userDao from '../../models/users/userDao.mjs';
import HTTPerror from 'http-errors';
import {createToken} from '../../services/jwtServices.mjs';
import bcrypt from 'bcrypt';

const login = async (req, res, next) =>{
    try {
        if (!req.body.email || !req.body.password) {
            
            next(HTTPerror(400,{message:'no introducistes el user o el password'}));
        } else {
            let user = await userDao.findByEmail(req.body.email);
            if(user && user.length>=1){
             
                if(await bcrypt.compare(req.body.password, user[0].password)){
                    let token = createToken(user);
                    console.log(token);
                    res.send({user, token});
                }else{
                    next(HTTPerror(400,{message:'password incorrecto'}));
                }
            } else{
                next(next(HTTPerror(400,{message:'name incorrecto'})));
            }
            
           
            
        }
    } catch (error) {
        next(next(HTTPerror(err.code,{message:error.message})));
    }
}

export default login;
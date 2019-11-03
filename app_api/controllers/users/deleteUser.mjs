import userDao from '../../models/users/userDao.mjs';
import HTTPerror from 'http-errors';

const deleteUser = async(req, res, next) =>{
    try{
        if (!req.params.id) {
            next(HTTPerror(400,{message:'Se necesita el parametro id'}));
        } else {    
            const user = await userDao.remove(req.params.id);
            res.json(user);
        }
} catch (error){
    
   next(error);
}
}

export default deleteUser;
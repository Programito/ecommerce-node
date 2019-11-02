import userDao from '../../models/users/userDao.mjs';
import HTTPerror from 'http-errors';

const updateUser = async (req, res, next) =>{
    try {       
        if (!req.body || !req.params.id) {
            res.sendStatus(400);
        } else {
            const user = await userDao.update(req.params.id,req.body);
            res.json(user);
        }
    } catch (error) {
        next(error);
    }
}

export default updateUser;
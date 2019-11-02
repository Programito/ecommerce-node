import userDao from '../../models/users/userDao.mjs';

const updateUserRol = async (req, res, next) =>{
    try {       
        if (!req.body || !req.params.id) {
            res.sendStatus(400);
        } else {
            const user = await userDao.updateRole(req.params.id,req.body.role);
            res.json(user);
        }
    } catch (error) {
        next(error);
    }
}

export default updateUserRol;
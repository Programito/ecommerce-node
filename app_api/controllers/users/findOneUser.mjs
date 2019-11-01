import userDao from '../../models/users/userDao.mjs';

const findOneUser = async(req, res) =>{
    try {
        if (!req.params.id) {
            res.sendStatus(400);
        } else {
            const user = await userDao.listOne(req.params.id);
            res.json(user);
        }
    } catch (error) {

        throw error;
    }
}

export default findOneUser;
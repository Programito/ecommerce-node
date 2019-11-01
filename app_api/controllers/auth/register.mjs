import userDao from '../../models/users/userDao.mjs';

const register = async(req, res) =>{

    try {
        if (!req.body) {
            res.sendStatus(400);
        } else {

            const user = await userDao.create(req.body);
            res.send(user);
        }
    } catch (error) {
        res.status(400).send(error);
        throw error;
    }
}

export default register;
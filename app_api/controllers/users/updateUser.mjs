import userDao from '../../models/users/userDao.mjs';

const updateUser = async (req, res) =>{
    try {       
        if (!req.body || !req.params.id) {
            res.sendStatus(400);
        } else {
            const user = await userDao.update(req.params.id,req.body);
            res.json(user);
        }
    } catch (error) {
        res.send('ha habido un error');
        throw error;
    }
}

export default updateUser;
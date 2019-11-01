import userDao from '../../models/users/userDao.mjs';

const findUserPaginator = async(req, res) =>{
    try {
        if (!req.params.page || !req.params.numElem) {
            res.sendStatus(400);
        } else {
            const user = await userDao.paginator(parseInt(req.params.page), parseInt(req.params.numElem));
            const user_number = await userDao.count();
            user.push({ user_number });
            res.json(user);
        }
    } catch (error) {
        throw error;
    }
}

export default findUserPaginator;
import userDao from '../../models/users/userDao.mjs';

const findAllUsers = async(req, res) =>{
    try {
        const user = await userDao.list();
        if (req.query['count'] == 'true') {
            const user_number = user.length;
            user.push({ user_number });
        }
        res.json(user);
    } catch(error){
        throw error;
    }

}

export default findAllUsers;
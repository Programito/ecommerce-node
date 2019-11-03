import userDao from '../../models/users/userDao.mjs';

const findAllUsers = async(req, res,next) =>{
    try {
        const user = await userDao.list();
        if (req.query['count'] == 'true') {
            const user_number = user.length;
            user.push({ user_number });
        }
        res.json(user);
    } catch(error){
      next(error);
    }

}

export default findAllUsers;
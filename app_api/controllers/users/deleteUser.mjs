import userDao from '../../models/users/userDao.mjs';

const deleteUser = async(req, res) =>{
    try{
        if (!req.params.id) {
            res.sendStatus(400);
        } else {    
            const user = await userDao.remove(req.params.id);
            res.json(user);
        }
} catch (error){
    
    throw error;
}
}

export default deleteUser;
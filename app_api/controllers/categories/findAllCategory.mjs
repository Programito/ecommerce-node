import categoryDao from '../../models/categories/categoryDao.mjs';
import HTTPerror from 'http-errors';

const findAllCategories = async(req, res,next) =>{
    try {
        const category = await categoryDao.list();
    
        res.json(category);
    } catch(error){
      next(error);
    }

}

export default findAllCategories;
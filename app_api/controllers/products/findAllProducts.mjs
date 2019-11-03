
import productDao from '../../models/products/productDao.mjs';


const findAllProduct = async(req, res,next) =>{
    try {
        const products = await productDao.list();
        // if (req.query['count'] == 'true') {
        //     const user_number = user.length;
        //     user.push({ user_number });
        // }
        res.json(products);
    } catch(error){
         next(error);
    }

}

export default findAllProduct;
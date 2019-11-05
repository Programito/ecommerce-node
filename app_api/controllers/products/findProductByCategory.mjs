
import productDao from '../../models/products/productDao.mjs';


const findProductByCategory = async(req, res,next) =>{
    try {
        console.log(req.params.id);
        const products = await productDao.listProductsByCategory(req.params.id);
        // if (req.query['count'] == 'true') {
        //     const user_number = user.length;
        //     user.push({ user_number });
        // }
        res.json(products);
    } catch(error){
         next(error);
    }

}

export default findProductByCategory;
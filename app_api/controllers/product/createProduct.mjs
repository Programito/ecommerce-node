import productDao from '../../models/products/productDao.mjs';
import HTTPerror from 'http-errors';

const createProduct = async(req, res,next) =>{
    try {
        if (!req.body) {
            next(HTTPerror(400,{message:'Error en los parámetros de entrada'}));
        } else {
            console.log(req.body);
            const product = await productDao.create(req.body);
            res.send(product);
        }
    } catch (err) {
        if(err.name == 'ValidationError') {
            next(HTTPerror(400,{message: err.message}));
        } else if (err.name == 'MongoError' && err.code == 11000) {
            console.log(err);
            next(HTTPerror(400,{message:'Duplicate validation error'}));          
        } else {
            next(error); 
        }
    }
}

export default createProduct;
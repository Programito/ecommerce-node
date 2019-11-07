
import productDao from '../../models/products/productDao.mjs';
import HTTPerror from 'http-errors';
import {Product} from '../../models/model.mjs';
// import {User} from '../model.mjs';

const updateProduct = async (req, res, next) => {
    try {

        if(!req.body.precioUnitario || !req.body.nombre && !req.body.cantidad && !req.body.categoria){
            next(HTTPerror(400, {message:"faltan parametros de entrada"}));
        }
        let product = new Product();
        Object.assign(product, req.body);
        product = await productDao.update(req.params.id,product);
        res.send(product);
    } catch (err) {
        next(HTTPerror(err.code, {message:err.message}));
    }
}

export default updateProduct;
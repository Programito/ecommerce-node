import Router from 'express';
import findOneProduct from '../controllers/product/findOneProduct.js';
import updateProduct from '../controllers/product/updateProduct.js';
import deleteProduct from '../controllers/product/deleteProduct.js';
import createProduct from '../controllers/product/createProduct.js';
import findDiscountProduct from '../controllers/product/findDiscountProduct.js';
import findPromoProduct from '../controllers/product/findPromoProduct.js';

const router = Router();

router.post('/',createProduct);

router.get('/:id', findOneProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

router.get('/buscar/oferta',findDiscountProduct);

router.get('/buscar/promocion',findPromoProduct);

export default router;
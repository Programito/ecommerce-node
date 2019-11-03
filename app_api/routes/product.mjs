import Router from 'express';
import findOneProduct from '../controllers/product/findOneProduct.mjs';
import updateProduct from '../controllers/product/updateProduct.mjs';
import deleteProduct from '../controllers/product/deleteProduct.mjs';
import createProduct from '../controllers/product/createProduct.mjs';

const router = Router();

router.post('/',createProduct);

router.get('/:id', findOneProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;
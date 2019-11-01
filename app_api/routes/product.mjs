import Router from 'express';
import findOneProduct from '../controllers/product/findOneProduct.mjs';
import updateProduct from '../controllers/product/updateProduct.mjs';
import deleteProduct from '../controllers/product/deleteProduct.mjs';

const router = Router();

router.get('/:id', findOneProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;
import Router from 'express';
import findPaginator from '../controllers/products/findPaginator.mjs';
import findAllProducts from '../controllers/products/findAllProducts.mjs';

const router = Router();

router.get('/', findAllProducts);
router.get('/:page', findPaginator);

export default router;
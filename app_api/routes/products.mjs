import Router from 'express';
import findPaginator from '../controllers/products/findPaginator.mjs';
import findAllProducts from '../controllers/products/findAllProducts.mjs';
import findProductByCategory from '../controllers/products/findProductByCategory.mjs';

const router = Router();

router.get('/', findAllProducts);
router.get('/:page', findPaginator);
router.get('/category/:id', findProductByCategory)

export default router;
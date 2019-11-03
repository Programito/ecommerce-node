import Router from 'express';
import createCategory from '../controllers/categories/createCategory.mjs';
import findAllCategories from '../controllers/categories/findAllCategory.mjs';

const router = Router();

router.get('/',findAllCategories);
router.post('/', createCategory);


export default router;
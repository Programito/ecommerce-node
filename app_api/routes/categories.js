import Router from 'express';
import createCategory from '../controllers/categories/createCategory.js';
import findAllCategories from '../controllers/categories/findAllCategory.js';

const router = Router();

router.get('/',findAllCategories);
router.post('/', createCategory);


export default router;
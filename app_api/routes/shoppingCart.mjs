import Router from 'express';
import addProduct from '../controllers/shoppingCarts/addProduct.mjs';


const router = Router();


router.put('/:id', addProduct);


export default router;
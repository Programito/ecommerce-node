import Router from 'express';
import addProduct from '../controllers/shoppingCarts/addProduct.mjs';
import findCart from '../controllers/shoppingCarts/findCart.mjs';


const router = Router();

router.get('/:id',findCart);
router.put('/:id', addProduct);


export default router;
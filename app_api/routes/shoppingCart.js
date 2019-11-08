import Router from 'express';
import addProduct from '../controllers/shoppingCarts/addProduct.js';
import findCart from '../controllers/shoppingCarts/findCart.js';
import removeProduct from '../controllers/shoppingCarts/removeProduct.js';


const router = Router();

router.get('/:id',findCart);
router.put('/:id', addProduct);
router.delete('/:id', removeProduct);


export default router;
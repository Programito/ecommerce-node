import Router from 'express';
import addProduct from '../controllers/shoppingCarts/addProduct.mjs';
import findCart from '../controllers/shoppingCarts/findCart.mjs';
import removeProduct from '../controllers/shoppingCarts/removeProduct.mjs';


const router = Router();

router.get('/:id',findCart);
router.put('/:id', addProduct);
router.delete('/:id', removeProduct);


export default router;
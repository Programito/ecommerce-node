import cartDao from "../../models/shoppingCarts/shoppingCartDao.mjs";

import userDao from "../../models/users/userDao.mjs";
import productDao from "../../models/products/productDao.mjs";

import HTTPerror from "http-errors";

const removeProduct = async (req, res, next) => {
  try {
    let user = await userDao.listOne(req.params.id);
    let shoppingCart;
    let idCart;
    // existe el usuario
    if (user) {
      // No existe el carro
      if (!user.ca) {
        next(HTTPerror(400, {message:"el usuario no tiene carro"}));
      }else{
          shoppingCart = await cartDao.listOne(user.ca);
      }

      idCart = user.ca;

      if (req.body && req.body.idProduct && req.body.cantidad) {
        let product = await productDao.listOne(req.body.idProduct);
        let modificar;
        let shop = await cartDao.removeProducts(shoppingCart,product,req.body.cantidad);
        shoppingCart = shop.cart;
        product = shop.product;
        modificar = shop.modificar;
        shoppingCart = await cartDao.guardar(shoppingCart);
        product = await productDao.guardar(product, modificar, shoppingCart._id);

        res.send({shoppingCart, product});
      }else{
        next(HTTPerror(400, {message:"parametros incorrectos"}));
      }
    }else{
      next(HTTPerror(400, {message:"no existe el id de usuario"}));
    }
  } catch (err) {
    next(HTTPerror(err.code, {message:err.message}));
  }
};

export default removeProduct;

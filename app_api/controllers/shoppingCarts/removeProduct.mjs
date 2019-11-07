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
        console.log("el usuario no tiene");
      }else{
          shoppingCart = await cartDao.listOne(user.ca);
          console.log(shoppingCart);
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
      }
    }
  } catch (err) {
    res.send(err);
  }
};

export default removeProduct;

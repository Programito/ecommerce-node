import cartDao from "../../models/shoppingCarts/shoppingCartDao.js";
import userDao from "../../models/users/userDao.js";
import categoryDao from "../../models/categories/categoryDao.js";
import HTTPerror from "http-errors";



const findCart = async (req, res, next) =>{
    try{
        if(req.params.id){
            const user = await userDao.listOne(req.params.id);
            if(user.ca){
                let cart = await cartDao.listOnePopulate(user.ca);
                for(let i=0; i<cart.products.length;i++){
                    console.log(cart.products[i].product.categoria);
                    cart.products[i].product.categoria = await categoryDao.listOneCategories(cart.products[i].product.categoria );

                }
              
                res.send(cart);
            }else{
                res.send({});
            }
        }else{
            next(HTTPerror(400, {message:"parametros incorrectos"}));
        }
    }catch(err){
        next(HTTPerror(err, {message:err.message}));
    }
}

export default findCart;
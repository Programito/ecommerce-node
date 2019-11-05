import mongo from '../../../mongo/MongoManager.mjs';
import {ShoppingCart} from '../model.mjs';

class shoppingCartDao {
    constructor(){
        mongo.connect();
    }

    create(data){
        const shoppingCart = new ShoppingCart();
        Object.assign(shoppingCart, data);
        return shoppingCart.save();
    }

    addProduct(idShoppingCart,idProduct, cantidad){
        
    }

    

}

export default shoppingCartDao;


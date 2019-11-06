import mongo from '../../../mongo/MongoManager.mjs';
import {Product} from '../model.mjs';


class productDAO {
    constructor(){
        mongo.connect();
    }

    create(data){
        let product = new Product();
        if(data.oferta && data.oferta.descuento){
            data.precioUnitario = data.precioUnitario - (data.precioUnitario * (data.oferta.descuento/100));
        }
        Object.assign(product, data);
        return product.save();
    }

    list(){
        return Product.find().exec();
    }

    listAddCategory(){
        return Product.find().populate('categoria').exec();
    }

    listProductsByCategory(id){
            return Product.find()
                .where('categoria').equals(id)
                .populate('categoria')
                .exec();
    }

    listOne(id){
        return Product.findById(id).exec();
    }

    update(id,data){
        if(data.oferta && data.oferta.descuento){
            data.precioUnitario = data.precioUnitario - (data.precioUnitario * (data.oferta.descuento/100));
        }
        return Product.findByIdAndUpdate(id,data,{new:true, useFindAndModify:false}).exec();
    }

    remove(id){
        return Product.findByIdAndRemove(id,{useFindAndModify:false}).exec();
    }

    addCart(product, idCart, cantidad){
        product.cantidad = product.cantidad - cantidad;
        
        // no esta el carrito en el producto
        if(product.shoppingCart.indexOf(idCart) === -1){
            product.shoppingCart.push(idCart);
        }

        return product.save();
       
    }
}


export default new productDAO();
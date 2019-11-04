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

    listOne(id){
        return Product.findById(id).exec();
    }


    update(id,data){
        return Product.findByIdAndUpdate(id,data,{new:true, useFindAndModify:false}).exec();
    }

    remove(id){
        return Product.findByIdAndRemove(id,{useFindAndModify:false}).exec();
    }
}


export default new productDAO();
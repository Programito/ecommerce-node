import mongo from '../../../mongo/MongoManager.mjs';
import {Category} from '../model.mjs';

class categoryDao{
    constructor(){
        mongo.connect();
    }

    create(data){
        const category = new category();
        Object.assign(category, data);
        return category.save();
    }

    list(){
        return Category.find().exec();
    }

    listOne(id){
        return User.findById(id).exec();
    }

}

export default new categoryDao();
import mongo from '../../../mongo/MongoManager.mjs';
import {User} from '../model.mjs';


class userDAO {
    constructor(){
        mongo.connect();
    }

    create(data){
        const user = new User();
        Object.assign(user, data);
        return user.save();
    }

    list(){
        return User.find().exec();
    }

    listOne(id){
        return User.findById(id).exec();
    }

    // login(email){
    //     return User.find({email}).exec();
    // }

    findByEmail(email){
        return User.find({email}).exec();
    }

    update(id,data){
        delete data.role;
        return User.findByIdAndUpdate(id,data,{new:true, useFindAndModify:false}).exec();
    }

    remove(id){
        return User.findByIdAndRemove(id,{useFindAndModify:false}).exec();
    }

    paginator(page,numElem){
        let pos = page * numElem;
        return User.find().skip(pos).limit(numElem).exec();
    }

    count(){
        return User.countDocuments().exec();
    }

    updateRole(id,role){
        return User.findByIdAndUpdate(id,{role},{new:true, useFindAndModify:false}).exec();
    }
    addCart(user, idCart){
        user.ca = idCart;
        console.log(user);
        return user.save();
    }

    buscarUsuarios(regex){
        return User.find({},'nombre email').or([{ 'nombre': regex }, { 'email': regex }]).exec();
    }

}


export default new userDAO();

import mongoose from 'mongoose';
import config from '../config.mjs';


class MongoManager {

    #config;
    
    constructor(config){
        this.#config = config;
    }
    getConnectionURL(){
        return this.#config.MONGODB_URI;
    }

    isConnected(){
        mongoose.connection.on('connected',_=> true);
    }
    
    connect () {
        return mongoose.connect(this.getConnectionURL(),
        { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
      }
    
    disconnect(){
        mongoose.disconnect();
    }

}

export default new MongoManager(config);
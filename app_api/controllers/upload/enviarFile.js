import userDao from '../../models/users/userDao.js';
import HTTPerror from 'http-errors';
import path from 'path';
import fs from 'fs';


const enviarFile = async(req, res,next) =>{
    try {
        var img = req.params.img;
        let __dirname = path.resolve();
        let pathImagen = path.resolve(`${__dirname}/uploads/${img}`);

        if (fs.existsSync(pathImagen)) {
            res.sendFile(pathImagen);
        } else {
            next(HTTPerror(400, {message:"La imagen no existe"}));
        }
        
    
    } catch(err){
        next(HTTPerror(err.code, {message:err.message}));
    }

}

export default enviarFile;
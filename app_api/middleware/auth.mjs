import jwt from 'jsonwebtoken';
import {verifyToken} from '../services/jwtServices.mjs';

const verificaTokens = (req,res,next) => {
    console.log("entre");
    const token = req.body.token;
    console.log(token);
    // try{
        if(!token){
            return res.status(401).json({
                ok: false,
                mensaje: 'Token incorrecto',
                errors: 'Token incorrecto'
            });
        }
    //     }
    //     const decoded= verifyToken(token);
    //     next();
    // }catch(e){
    //     return res.status(401).json({
    //         ok: false,
    //         mensaje: 'Token incorrecto',
    //         errors: err
    //     });
    // }
    try {
        console.log(process.env.TOKEN);
        var decoded = jwt.verify(token, process.env.TOKEN);
        next();
      } catch(err) {
        return res.status(401).json({
                    ok: false,
                    mensaje: 'Token incorrecto',
                    errors: err
                });
      }
    
}

export {verificaTokens};

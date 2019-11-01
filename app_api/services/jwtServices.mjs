import jwt from 'jsonwebtoken';

const createToken = (user) => {
   return jwt.sign({
        name: user.email, 
        password: user.password
      },  process.env.TOKEN, { expiresIn: process.env.EXPIRETOKEN});
} 

const verifyToken = (token) => {
    try {
        var decoded = jwt.verify(token, process.env.EXPIRETOKEN);
        return decoded;
      } catch(err) {
        return err;
      }
}

export {createToken, verifyToken};
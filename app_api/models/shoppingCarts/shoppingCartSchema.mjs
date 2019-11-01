import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var ShoppingCart = new Schema({
    estado: { type: Boolean, default: 'activo' },
    fecha: { type: Date, default: Date.now },
    total: { type: Number, default: 0 },
    expired: { type: Date, default: Date.now },
    Products: [{ type: Schema.ObjectId, ref: 'Product' }],
});


export default ShoppingCart;
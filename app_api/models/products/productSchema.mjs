import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var productSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    precioUni: { type: Number, required: [true, 'El precio únitario es necesario'] },
    cantidad: { type: Number, required: [true, 'La cantidad es necesaria'] },
    categoria: { type: Schema.ObjectId, ref: 'Category', required: true },
    ShoppingCart: [{ type: Schema.ObjectId, ref: 'ShoppingCart' }],
});


export default productSchema;
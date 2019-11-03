import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ofertaSchema = new Schema({
    descuento: Number,
    createAt: {type: Date, default: Date.now()},
    expires: {type:Date}
});

const promocionSchema = new Schema({
    promocion: String,
    novedad: {type:Boolean, default: true},
    createAt: {type: Date, default: Date.now()},
    expires: {type:Date}
});


const productSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    p: { type: Number, alias: 'precioUnitario',required: [true, 'El precio únitario es necesario'] },
    cantidad: { type: Number, required: [true, 'La cantidad es necesaria'] },
    categoria: { type: Schema.ObjectId, ref: 'Category', required: true },
    promocion: promocionSchema,
    ofertaSchema: ofertaSchema
    // ShoppingCart: [{ type: Schema.ObjectId, ref: 'ShoppingCart' }],
});


export default productSchema;
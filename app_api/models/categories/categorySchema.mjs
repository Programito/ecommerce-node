import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let categorySchema = new Schema({
    categoria: { type: String, unique: true, required: [true, 'La categoria es obligatoria'] },
    subcategoria: [{ type: Schema.ObjectId, ref: 'Category' }]
});

export default categorySchema;
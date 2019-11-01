import mongoose from 'mongoose';
import userSchema from './users/userSchema.mjs';
import categorySchema from './categories/categorySchema.mjs';
import productSchema from './products/productSchema.mjs';
import shoppingCartSchema from './shoppingCarts/shoppingCartSchema.mjs';


export const User= mongoose.model("User", userSchema);
export const Category= mongoose.model("Categories", categorySchema);
export const Product = mongoose.model("Product", productSchema);
export const ShoppingCart = mongoose.model("ShoppingCart", shoppingCartSchema);

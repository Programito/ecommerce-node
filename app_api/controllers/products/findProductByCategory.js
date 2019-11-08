import productDao from '../../models/products/productDao.js';
import categoryDao from '../../models/categories/categoryDao.js';


const findProductByCategory = async(req, res,next) =>{
    try {
        const category = await categoryDao.listOne(req.params.id);
        let products = await productDao.listProductsByCategory2();
        let productCategory= [];
        for(let i=0; i<products.length; i++){
            if(products[i].categoria.subcategoria.includes(category.categoria) || products[i].categoria.categoria == category.categoria){
                productCategory.push(products[i]);
            }
        }
        res.json(productCategory);
    } catch(error){
         next(error);
    }

}

export default findProductByCategory;
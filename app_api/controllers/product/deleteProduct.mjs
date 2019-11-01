
const deleteProduct = (req, res) =>{
    res.send("DELETE PRODUCT, id: " + req.params.id);
}

export default deleteProduct;

const findOneProduct = (req, res) =>{
    res.send("FIND ONE PRODUCT, id: " + req.params.id);
}

export default findOneProduct;
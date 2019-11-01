
const findPaginator = (req, res) =>{
    res.send("FIND PAGINATOR, pagina: " + req.params.page + ", elementos por pagina: " + process.env.elements);
}

export default findPaginator;
const express=require("express");
const routerdataSepatu= express.Router()
const controllersdataSepatu=require('controllers/dataSepatu');
const { get } = require("express/lib/request");

routerdataSepatu.route('/sepatu')
.get(controllersdataSepatu.getdataSepatu)

.post(controllersdataSepatu.insert)

routerdataSepatu.route('/sepatu/:harga')
.put(controllersdataSepatu.update)
.delete(controllersdataSepatu.delete)
.get(controllersdataSepatu.getdataSepatuByHarga)

routerdataSepatu.get('/sepatu/:harga/:stock',(req,res)=>{
    const harga= req.params.harga
    const stock= req.params.stock
    res.send('sepatu dengan harga:' +harga+ 'stock' +stock)
})

export default Router;
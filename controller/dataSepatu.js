const dataSepatu = require('../models/dataSepatu')
const modeldataSepatu= require('../models/dataSepatu')
const cari=(arrData,harga)=>{
    find =-1
    indeks =0
    while (find== -1 && indeks < arrData.length) {
        if(arrData[indeks].harga == harga){
            find=indeks
            return indeks
        }
        indeks++
    }
    return -1
}
module.exports={ 
    getdataSepatu:(req,res)=>{
        dataSepatu= modeldataSepatu.getdataSepatu(req)
        res.json(dataSepatu)
    },
    insert : (req,res)=>{
        newItem= modeldataSepatu.insert(req)
        res.status(201).json(newItem)
    },
    getdataSepatuByharga: (req,res)=>{
        dataSepatu=modeldataSepatu.getdataSepatu;
        harga= req.params.harga;
        indeks=cari(dataSepatu,harga);
        if(indeks!= -1){
            const dataSepatu={harga:dataSepatu[indeks].harga,
                                stock:dataSepatu[indeks].stock        
        }
        res.json(dataSepatu)
    }
    else{
        res.send('harga dengan Rp.200.000'+harga+ 'tidak ditemukan')
    }

    res.send('data dengan harga:'+req.params.harga)

},

update:(req,res)=>{
    // update
    dataSepatu=modeldataSepatu.getdataSepatu;
    harga=req.params.harga;
    indeks=cari(dataSepatu,harga);
    if(indeks!= -1){
        dataSepatu[indeks].harga=harga
        dataSepatu[indeks].stock=req.body.stock

        res.json(dataSepatu[indeks])
    }
    else{
        res.send('data dengan harga '+ req.params.harga + 'tidak ditemukan')
    }
},
delete : (req,res)=>{
    harga=req.params.harga;
    dataSepatu=modeldataSepatu.getdataSepatu;
    indeks=cari(dataSepatu,harga);

    if (indeks !=-1){
        dataSepatu.splice(indeks,2)

        res.send('data dengan harga '+ harga+ 'telah dihapus')
    }
    else{
        res.send('data dengan harga '+ req.params.harga+'tidak ditemukan')
    }
}
}
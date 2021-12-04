const mongoose = require('mongoose')
const registrar_dato = require('../database/registros')

exports.getData = (req, res)=>{
    registrar_dato.find({},(err,docs)=>{
        res.send({docs})
    })
}

exports.insertData = (req, res)=>{
    const data = req.body
    registrar_dato.create(data, (err, docs)=>{
        if(err){
            console.log('error', err);
            res.send({error: err},402)
        }else{
            res.send({data: docs})
        }
    })
}

const parserId = (x)=>{
    return mongoose.Types.ObjectId(x)
}
exports.updateSingle = (req, res)=>{
    const {id} = req.params //contine el valor a comparar en la base de datos
    const body = req.body //contiene llave y valor a actualizar
    registrar_dato.updateOne(
        {_id: parserId(id)},
        body,
        (err, docs)=>{
            res.send({
                items: docs
            })
        }
    )
}

exports.delete_u = (req, res)=>{
    const {id} = req.params //contine el valor a comparar en la base de datos
    //const body = req.body //contiene llave y valor a actualizar
    registrar_dato.deleteOne(
        {_id: parserId(id)},
        //body,
        (err, docs)=>{
            res.send({
                items: docs
            })
        }
    )
}
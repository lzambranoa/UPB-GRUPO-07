//const mgdb = require("mongoose");
const express = require('express');
const control = require('../controller/registro');
const router = express.Router();
const path = 'registro'

// const db = require("../database/db"),
//     registros = require("../database/registros");

router.use(express.json());
router.use(express.urlencoded({extended:true}));

//insert registro
router.post(`/${path}`, control.insertData)

//update en usuarios
router.put(`/${path}/:id`, control.updateSingle)

//borrar
router.delete(`/${path}/:id`, control.delete_u)

router.get(
    `/registro`, control.getData
)

module.exports =router

// router.route("/")
//     .get(function(req, resp){
//         mgdb.model("Registros").find({}, (err, registros)=>{
//             if(err) throw err;
//             resp.json(registros);
//         })
//     })
//     .post((req, resp)=>{
//             mgdb.model("Registros").create(
//             req.body, 
//             (err, registro)=>{
//             if(err){
//                 resp.json({"mensaje":"Registro no guardado"});
//                 console.log("error al guardar ", registro);
//             }else{
//                 console.log("Guardado", registro)
//                 resp.json(registro);
//             }
//         })
//     })

// router.route("/:id")
//     .get(function(req, resp){
//         mgdb.model("Registros").findById(req.params.id, 
//             (err, registro)=>{
//                 if(err){
//                     console.log("Error!", err);
//                 }else{
//                     console.log("Recuperando ID ", req.params.id);
//                     resp.json(registro);
//                 }
//             })
//     })
//     .put(function(req, resp){
//         mgdb.model("Registros").findById(req.params.id, 
//             (err, registro)=>{
//                 if(err){
//                     console.log("Error ", err);
//                 }else{
//                     console.log("Actualizando ID ", req.params.id);
//                     registro.updateOne(req.body, (err, data)=>{
//                         if(err) resp.json({"mensaje": "No ha sido actualizado"})
//                         resp.json({
//                             "_id":registro._id,
//                             "mensaje": "Ha sido actualizado"
//                         })
//                     })
//                 }
//             })
//     })
//     .delete(function(req, resp){
//         mgdb.model("Registros").findById(req.params.id, 
//             (err, registro)=>{
//                 if(err){
//                     console.log("Error ", err);
//                 }else{
//                     console.log("Borrando ID ", req.params.id);
//                     registro.remove((err, registro)=>{
//                         if(err) resp.json({"mensaje": "NO ha sido borrado"})
//                         resp.json({
//                             "_id":registro._id,
//                             "mensaje": "Ha sido borrado"
//                         })
//                     })
//                 }
//             })
//     })

// module.exports = router;







//HU-07 HU-08 Objetivo de Ahorro
const express = require('express');
const app = express();
//const puerto = 8001; 
app.use(express.urlencoded({extended: false}));
app.use (express.json());

//insertar operaciones
app.post("/api/personal-finance/operations",function(req,res){
    let operacion = req.body
    operations.push(operacion)
    res.json(operations)
});

//codigo para meta de ahorro
app.get ("/api/personal-finance/is-my-goal-achieved/:amount",function(req,res){
    let amount = req.params.amount;
    amount= parseInt(amount);
    
    const result= (amount > balance)? 'no cumple':'cumple'
    res.json(result)

});

// app.listen(puerto, ()=>{
//     console.log('la app esta en linea');
// })

module.exports = app;
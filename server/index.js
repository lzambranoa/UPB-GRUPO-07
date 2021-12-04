const express = require('express');
const app = express();
const puerto = 8001; 

const ruta = require('./routes/registro')
const db = require('./database/db')

app.get('/', (req, res)=>{ 
    res.json({
        "great":'Hello!!!'
    })
})

app.use(ruta)

app.listen(puerto, ()=>{
    console.log('la app esta en linea');
})

db()


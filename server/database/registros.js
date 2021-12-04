const mongoose = require('mongoose');

const ingreso_operaciones = new mongoose.Schema(
    {
        monto: {
            type: Number,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        categoria: {
            type: String,
            required: true
        },
        fecha: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('registro',ingreso_operaciones,'registros')

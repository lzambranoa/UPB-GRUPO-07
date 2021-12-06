let operaciones = [];
let balance = 0;


const registrarOperacion = (monto, tipo, categoria, fecha) => {
    const obj = {
        monto,
        tipo,
        categoria,
        fecha
    }
    operaciones.push(obj);

    // Almacena en el localstorage el array de operaciones
    const operacionesObj = JSON.stringify(operaciones);
    localStorage.setItem('operaciones', operacionesObj);

    for (const data in obj) {
        if (obj[data] === 'ingreso') {
            balance += obj.monto
        } else if (obj[data] === 'gasto') {
            balance -= obj.monto
        }
    }
    // Almacena en el local storage el valor del balance
    localStorage.setItem('balance', balance);
}


const registrarMetaAhorro = (meta) => {

    // Almacena en el local storage el valor de la meta de ahorro
    localStorage.setItem('metaAhorro', meta);
}

const estaMiMetaCumplida = () => {
    balance = parseInt(localStorage.getItem('balance'));
    metaAhorro = parseInt(localStorage.getItem('metaAhorro'));

    if (metaAhorro < balance) {
        return 'cumple';
    } else {
        return 'no cumple';
    }
}


// HU-05 - Añadir operaciones enviándolas a la API

const registrarOperacion = async (monto, tipo, categoria, fecha) => {
    const registro = {
        monto,
        tipo,
        categoria,
        fecha
    }
    let response = await fetch(
        'https://misiontic2022upb.vercel.app/api/personal-finance/operations', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(registro),
        });
    return response.json();
}


module.exports.registrarMetaAhorro = registrarMetaAhorro;
module.exports.registrarOperacion = registrarOperacion;
module.exports.estaMiMetaCumplida = estaMiMetaCumplida;
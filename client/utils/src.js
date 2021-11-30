let operaciones = [];
let balance = 0;

const registrarOperacion = (monto, tipo, categoria, fecha) => {
    const obj = {monto, tipo, categoria, fecha}
    operaciones.push(obj);

    // Almacena en el localstorage el array de operaciones
    const operacionesObj = JSON.stringify(operaciones);
    localStorage.setItem('operaciones', operacionesObj);

    for(const data in obj){
        if(obj[data] === 'ingreso'){
            balance += obj.monto
        }else if(obj[data] === 'gasto'){
            balance -= obj.monto
        }
    }
    // Almacena en el local storage el valor del balance
    localStorage.setItem('balance', balance);
}



module.exports.registrarOperacion = registrarOperacion;
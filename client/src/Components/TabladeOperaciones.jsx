import React from 'react'

export const TabladeOperaciones = () => {
    return (
        <div>
            <div class="container" id="tb">
        <div class="row">
            <div class="col-lg-6">
                <div class="table-responsive">

                
        <h3 align="center" class="campo">TABLA DE OPERACIONES</h3>
        <table id="example" class="table table-striped" style="width:100%">
            <thead>
                <tr align="center">
                    <th>TIPO DE OPERACIÓN</th>
                    <th>MONTO</th>
                    <th>CATEGORÍA</th>
                    <th>FECHA</th>
                </tr>
            </thead>
            <tbody>
               <tr align="center">
                   <td>Ingreso</td>
                   <td>$4.125.000</td>
                   <td>Nómina</td>
                   <td>30-10-2021</td>
               </tr>
               <tr align="center">
                    <td>Gasto</td>
                    <td>$1.520.100</td>
                    <td>Vivienda</td>
                    <td>02-11-2021</td>
                </tr>
                <tr align="center">
                    <td>Gasto</td>
                    <td>$520.000</td>
                    <td>Salud</td>
                    <td>04-11-2021</td>
                </tr>
                <tr align="center">
                    <td>Ingreso</td>
                    <td>$580.000</td>
                    <td>Renta</td>
                    <td>05-11-2021</td>
                </tr>
                <tr align="center">
                    <td>Gasto</td>
                    <td>$240.000</td>
                    <td>Ahorro</td>
                    <td>08-11-2021</td>
                </tr>
            </tbody>
            <p>
                <input type="submit" class="btnmeta btnmetaahorro" value="Meta de Ahorro" align="center"/>
              </p>
            <p>
                <input type="submit" class="btnmetac btnmetaahorroc" value="Meta de Ahorro Cumplida" align="center"/>
            </p>
        </table>
                </div>
            </div>
        </div>
    </div>

        </div>
    )
}

import React from 'react'
import Bt from './Boostraps_React'
// import './Styles/Formulario_Operaciones.css'


export const FormularioOperaciones = () => {

    return (

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="well well-sm">
                        <form class="form-horizontal" method="post">
                            <fieldset>
                                <legend class="text-center header">Ingreso de Operaciones</legend>

                                <div class="form-group">
                                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                    <div class="col-md-8">
                                        <input id="CampoMonto" name="monto" type="text" placeholder="&#xf090;Monto" class="form-control"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                    <div class="col-md-8">
                                        <select name="Tipo">
                                            <option value="1">Ingreso</option>
                                            <option value="2">Gasto</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                                    <div class="col-md-8">
                                        <input id="CampoCategoria" name="Categoria" type="text" placeholder="Categoria" class="form-control"/>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                                    <div class="col-md-8">
                                        <input id="CampoFecha" name="Fecha" type="date" placeholder="Fecha" class="form-control"/>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-12 text-center">
                                        <Bt />
                                        {/* <button type="submit" class="btn btn-primary btn-lg">Enviar información</button> */}
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
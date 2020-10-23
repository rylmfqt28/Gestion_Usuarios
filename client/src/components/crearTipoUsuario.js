import React, { Fragment, useState } from 'react';
import '../crearTipoUsuario.css';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';

const CrearTipoUsuario = () => {

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
    }


    return (

        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>    
            </nav>

        
            <form onSubmit={handleSubmit(onSubmit)}>

                <h2>Crear tipo de Usuario</h2>
                <div>
                    <input
                        name="crearTipo"
                        className="campoTipo"
                        ref={
                            register({
                                required: {
                                    value: true, message: 'Ingrese Tipo de Usuario'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'No más de 20 carácteres!'
                                },
                                minLength: {
                                    value: 5,
                                    message: 'Mínimo 5 carácteres'
                                }
                            })


                        }
                        placeholder="Ingresar tipo de u suario"

                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.crearTipo?.message}
                    </span>

                </div>

                <div>

                    <textarea
                        name="descripcion"
                        className="textArea"
                        ref={
                            register({
                                required: {
                                    value: true, message: 'Ingrese descripción'
                                },
                                maxLength: {
                                    value: 250,
                                    message: 'No más de 250 carácteres'
                                },
                                minLength: {
                                    value: 2,
                                    message: 'Mínimo 2 carácteres'
                                }
                            })


                        }
                        placeholder="Ingrese la Descripción Aquí"
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.descripcion?.message}
                    </span>
                    <br></br>
                    <div className="botones">
                        <button className="btn btn-primary  pull-right btn-lg" >Cancelar</button>
                        <button className="btn btn-primary pull-left btn-lg" >Crear</button>   
                    </div>
                    

                </div>

            </form>
        </Fragment>
    );
}


export default CrearTipoUsuario;
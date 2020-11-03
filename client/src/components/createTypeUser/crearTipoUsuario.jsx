import React, { Fragment, useState } from 'react';
import './crearTipoUsuario.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import logo from '../img/logo.png';
import { Link } from "react-router-dom"

const CrearTipoUsuario = () => {

    const [datos, setDatos] = useState({
        crearTipo: '',
        descripcionTipo: ''
    })

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
    }

    const handleDeleteKey = (event) => {
        let key = event.keyCode || event.which;
        if (datos.crearTipo.length !== 0 && (key === 8 || key === 127)) {
            let nuevo = datos.crearTipo.substring(0, datos.crearTipo.length - 1);
            setDatos({
                ...datos,
                [event.target.name]: nuevo
            });
        }
    }
    const restartForm = () => {
        setDatos({
            ...datos,
            crearTipo: '',
            descripcionTipo: ''
        });
    }


    const validar = (event) => {
        let key = event.keyCode || event.which;
        let tecla = String.fromCharCode(key);
        let letras = " áéíóúñÑ";
        if (datos.crearTipo.length !== 20) {
            console.log('llego malditod');
            if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letras.indexOf(tecla) !== -1)) {
                setDatos({
                    ...datos,
                    [event.target.name]: event.target.value + tecla
                });
            }
        } else {
            alert('El maximo de caracteres es de 20');
        }

    }
    const presionarKey = () => {
        if (descripcionTipo.length === 250) {
            alert('Solo se permite un maximo de 250 caracteres')
        }
    }
    const { crearTipo, descripcionTipo } = datos
    const handleInputChange = (event) => {
        if (event.target.name === "descripcionTipo") {
            
            setDatos({
                ...datos,
                [event.target.name]: event.target.value
            });
        }
    }
    const createButtonEvent = async (event) => {
        event.preventDefault();
        try {
            if (datos.crearTipo.trim() !== '' && datos.descripcionTipo.trim() !== '') {
                const res = await axios.get('/api/type/' + datos.crearTipo.trim());
                console.log(res.data);
                if (res.data === null) {
                    const crear = await axios.post('/api/type/', datos);
                    alert('Se creo el tipo de usuario Exitosamente');
                    console.log("Se creó el nuevo tipo de usuario:" + crear.data);
                } else {
                    alert('El tipo de usuario ya existe');
                    console.log("El usuario ya existe");
                }
            } else {
                //mensaje campos vacios "Existen campos vacios"
                alert('Existen campos vacíos, rellenar los campos restantes');
                console.log("");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <Fragment>
            <div className="barraNav">
                <nav className="navbar navbar-light justify-content-between">
                    <a className="navbar-brand" href="#">
                        <img className="logo" src={logo} height="35" alt="logo" />
                    </a>

                    <div>
                        <Link
                            className="btn btn-outline-info my-2 my-sm-0"
                            type="submit"
                            to="/solicitudes"
                        >Solicitudes</Link>
                    </div>

                </nav>
            </div>

            <form className="formC"
                onSubmit={handleSubmit(onSubmit)}>

                <h2>Crear tipo de Usuario</h2>

                <div>
                    <input
                        type="text"

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

                                },

                            })
                        }
                        onChange={handleInputChange}
                        placeholder="Ingresar tipo de usuario"
                        onKeyPress={validar}
                        onKeyDown={handleDeleteKey}
                        value={crearTipo}

                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.crearTipo?.message}
                        {errors?.crearTipo && <p> Solo se permiten letras</p>}
                    </span>

                </div>

                <div>
                    <textarea
                        name="descripcionTipo"
                        className="textArea"
                        maxLength="250"
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
                        onChange={handleInputChange}
                        onKeyPress={presionarKey}
                        value={descripcionTipo}
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.descripcion?.message}
                    </span>
                    <br></br>
                    <div className="botones">

                        <button className="btn btn-primary  pull-right btn-lg" type="reset" onClick={restartForm}>Cancelar</button>

                        <button className="btn btn-outline-info  pull-left btn-lg" onClick={createButtonEvent}>Crear</button>

                    </div>
                </div>

            </form>
        </Fragment>
    );
}







export default CrearTipoUsuario;
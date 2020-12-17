import React, { Fragment, useState } from 'react';
import './crearTipoUsuario.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import NavMenu from '../menuAdmin/NavMenu'
import swal from 'sweetalert'

const CrearTipoUsuario = () => {

    const [datos, setDatos] = useState({
        crearTipo: '',
        descripcionTipo: ''
    })

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
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
            if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letras.indexOf(tecla) !== -1)) {
                setDatos({
                    ...datos,
                    [event.target.name]: event.target.value + tecla
                });
            }
        } else {
            swal("ADVERTENCIA", "El maximo de caracteres es de 20", "warning");
        }

    }
    const presionarKey = () => {
        if (descripcionTipo.length === 250) {
            swal("ADVERTENCIA", "Solo se permite un maximo de 250 caracteres", "warning");
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
                if (res.data === null) {
                    const crear = await axios.post('/api/type/', datos);
                    swal("TIPO DE USUARIO CREADO", "Se creo el tipo de usuario Exitosamente", "success");
                } else {
                    swal("ERROR", "El tipo de usuario ya existe", "error");
                }
            } else {
                //mensaje campos vacios "Existen campos vacios"
                swal("ADVERTENCIA", "Existen campos vacíos, rellenar los campos restantes", "warning");
            }

        } catch (error) {
        }
    }

    return (

        <Fragment>
            <NavMenu/>

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

           {/*<script src="../menuAdmin/FuntionMenu.js"></script>*/} 
        </Fragment>
    );
}

export default CrearTipoUsuario;
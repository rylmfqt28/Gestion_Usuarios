import React, { Fragment, useState } from 'react';
import '../crearTipoUsuario.css';
import { useForm } from 'react-hook-form';

const FormCreateTypeUser = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido)

    }

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()

    }


    return (
        <Fragment>
            <h1>Formulario crear tipo de usuario</h1>
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-3 " >
                    <input
                        placeholder="Crear tipo usuario"
                        className="form-control"
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}
                        ref={
                            register({
                                required: { value: true, message: 'titulo obligatorio' }

                            }
                            )

                        }
                    />
                    {
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.nombre?.message}
                        </span>
                    }
                </div>
                <div className="col-md-3" >
                    <input
                        placeholder="Description"
                        className="form-control"
                        type="text"
                        name="apellido"
                        onChange={handleInputChange}
                        ref={
                            register({
                                required: { value: true, message: 'titulo obligatorio' }
                            }
                            )
                        }
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.apellido?.message}
                    </span>
                </div>
                <div className="col-md-3" >
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>

            </form>
            <h1>{datos.nombre}--{datos.apellido}</h1>
        </Fragment>

    );

}
export default FormCreateTypeUser;
import ModalEditType from './modalEditType.js';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "./ModificarTipoUsuario.css";

import NavMenu from '../menuAdmin/NavMenu'

class ModificarTipoUser extends Component {

    render() {


        return (

            <div>
                <NavMenu />

                <div >
                    <h1 align="center"> Modificar Tipo de Usuario </h1>
                    <br></br>
                </div>
                <div className="containerPrimary">
                    <div className="row">

                        <div className="col" id="contencol">
                            {/*titulo de permisos asigandos y combobox tipo de usuario*/}
                            <h5 align="center">Lista de Tipo de Usuario</h5>
                            <br></br>
                            {/*Lista de permisos Asignados */}
                            <div className="row" id="asignados">

                                <div className="table-responsive" >
                                    <div className="containertable">
                                        <table className="tableFixHead" id="listaPermisos">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Tipos de Ususario</th>
                                                    <th scope="col">Opciones</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                {/* Lista de tipo usuarios estatica */}
                                                <tr >

                                                    <td>Vendedor</td>

                                                    <td>

                                                        <button
                                                            className="btn btn-default btn-sm"
                                                            //data-toggle="modal"
                                                            //data-target="#editPermiso"
                                                            onClick=""
                                                        >
                                                            <FontAwesomeIcon icon={faEdit} style={{ fontSize: "20px" }}></FontAwesomeIcon>
                                                        </button>{' '}

                                                        <button
                                                            className="btn btn-default btn-sm"
                                                        //data-toggle="modal"
                                                        //data-target="#erasePermiso"
                                                        //onClick={}
                                                        >
                                                            <FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: "20px", color: "blue" }}></FontAwesomeIcon>
                                                        </button>{' '}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Oficina</td>

                                                    <td>

                                                        <button
                                                            className="btn btn-default btn-sm"
                                                            data-toggle="modal"
                                                            data-target="#modalEditType"
                                                            onClick={this.check}
                                                        >
                                                            <FontAwesomeIcon icon={faEdit} style={{ fontSize: "20px" }}></FontAwesomeIcon>
                                                        </button>{' '}

                                                        <button
                                                            className="btn btn-default btn-sm"
                                                        //data-toggle="modal"
                                                        //data-target="#erasePermiso"
                                                        //onClick={}
                                                        >
                                                            <FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: "20px", color: "blue" }}></FontAwesomeIcon>
                                                        </button>{' '}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
<ModalEditType />

            </div >

        )
    }

}

export default ModificarTipoUser;
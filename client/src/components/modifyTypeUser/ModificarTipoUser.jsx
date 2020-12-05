import ModalEditType from './modalEditType.js';
import ModalEliminarPermiso from './modalEliminarTypeUser.jsx';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "./ModificarTipoUsuario.css";

import TypeUser from '../../Service/tyUserService'

import NavMenu from '../menuAdmin/NavMenu'

class ModificarTipoUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            permiso: {},
            listUserTypes: []
        };

        //this.updateList = this.updateList.bind(this)
        this.updateListUserTypes = this.updateListUserTypes.bind(this);
    }

    replaceModalItem(typeUser) {
        this.setState({ permiso: typeUser })
        console.log(typeUser)
    }
    componentDidMount(){
        this.updateListUserTypes();
    }

    updateListUserTypes = async() =>{
        const data = await TypeUser.getAllUserTypes();
        this.setState({listUserTypes: data});
    }
    //updateList() {   
      //      TypeUser.getAllUserTypes().then(data=>this.setState({listUserTypes: data}))
    //}

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
                                                {
                                                    this.state.listUserTypes.map((typeUser,index)=>(
                                                        <tr key={index}>
                                                            <td>{typeUser.crearTipo}</td>

                                                            <td>

                                                                <button
                                                                className="btn btn-default btn-sm"
                                                                data-toggle="modal"
                                                                data-target="#modalEditType"
                                                                onClick={() => this.replaceModalItem(typeUser)}
                                                                >
                                                                <FontAwesomeIcon icon={faEdit} style={{ fontSize: "20px" }}></FontAwesomeIcon>
                                                                </button>{' '}

                                                                <button
                                                                    className="btn btn-default btn-sm"
                                                                    data-toggle="modal"
                                                                    data-target="#erasePermisoTypeUser"
                                                                     onClick={() => this.replaceModalItem(typeUser)}
                                                                >
                                                                <FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: "20px", color: "blue" }}></FontAwesomeIcon>
                                                                </button>{' '}
                                                            </td>
                                                        </tr>
                                                    ))    
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            <ModalEditType 
             tipoUsuarioID={this.state.permiso.tipoUsuarioID}
             crearTipo={this.state.permiso.crearTipo}
             descripcionTipo={this.state.permiso.descripcionTipo}   
             updateListUserTypes ={this.updateListUserTypes}     
            />

            <ModalEliminarPermiso 
              tipoUsuarioID={this.state.permiso.tipoUsuarioID}
              crearTipo={this.state.permiso.crearTipo}
              updateListUserTypes ={this.updateListUserTypes}
            />
            
            </div >

        )
    }

}

export default ModificarTipoUser;
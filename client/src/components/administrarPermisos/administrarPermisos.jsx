import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TipoUser from '../../Service/TipoUser';
import ModalEditarPermiso from './ModalEditarPermiso';
import ModalEliminarPermiso from './ModalEliminarPermiso';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faEdit, faTrashAlt, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import ModalCreatePermit from './ModalCreatePermit';

import "./administrarPermisos.css";
import $ from 'jquery';
import NavMenu from '../menuAdmin/NavMenu'
import AdminPermisosService from '../../Service/AdminPermisosService';

import Alerta from '../alert/Alerta'

class administrarPermisos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            permisos: [],
            permisosAsignados: [],
            permiso: {},
            TUsuarios: [],
            tipo: " ",
            tipoId:0
        }
        this.updateList = this.updateList.bind(this)
        this.updateTipoUsuario = this.updateTipoUsuario.bind(this)
        this.add = this.add.bind(this)
    }
    componentDidMount() {
        TipoUser.getAll().then(data => this.setState({TUsuarios: data}))
        AdminPermisosService.getListaPermisos().then(data=>this.setState({permisos: data}))
    }

    updateTipoUsuario(e){
        this.setState({tipo: e.target.value})
        for(const value of this.state.TUsuarios ){
            if(value.crearTipo===e.target.value){
                this.setState({tipoId: value.tipoUsuarioID})
            }
        }
        if(e.target.value===" "){
            AdminPermisosService.getListaPermisos().then(data=>this.setState({permisos: data}))
            this.setState({permisosAsignados: []})
        }else{
            AdminPermisosService.getListaPermisosNoAsignados(e.target.value).then(data => this.setState({permisos: data}))
            AdminPermisosService.getListaPermisosAsignados(e.target.value).then(data => this.setState({permisosAsignados: data}))
        }
    }

    updateList() {   
        if(this.state.tipo===" "){
            AdminPermisosService.getListaPermisos().then(data=>this.setState({permisos: data}))
        }else{
            AdminPermisosService.getListaPermisosNoAsignados(this.state.tipo).then(data => this.setState({permisos: data}))
            AdminPermisosService.getListaPermisosAsignados(this.state.tipo).then(data => this.setState({permisosAsignados: data}))
        }
    }
    

    replaceModalItem(Permiso) {
        this.setState({ permiso: Permiso })
    }

    saveDetails(){
        $("#editPermiso").modal("hide");
        this.updateList();
        this.updateList();
    }
    
    add(permisoID){
        if(this.state.tipo!==" "){
            const add = {
                tipoUsuarioId: this.state.tipoId,
                permisoId: permisoID
            }
            AdminPermisosService.postAsignarPermiso(add)
        }else{
            Alerta.AlertaDanger("seleccione un tipo de Usuario")
        }
        this.updateList()
        this.updateList() 
    }

    remove(permisoID){
        AdminPermisosService.deletePermiso(this.state.tipoId,permisoID);
        
        this.updateList()
        this.updateList()     
    }
    
    



    render() {

        const Permisos = this.state.permisos.map((Permiso, index) => {
          return (
            <tr key={index} >
    
              <td>{Permiso.nombrePermiso}</td>
    
              <td>
                <button className="btn btn-default btn-sm" onClick={() => this.add(Permiso.permisoId)} >
                    <FontAwesomeIcon icon={faPlusCircle} style={{fontSize:"20px", color:"green"}}></FontAwesomeIcon> 
                </button>{' '}
                <button
                    className="btn btn-default btn-sm"
                    data-toggle="modal"
                    data-target="#editPermiso"
                    onClick={() => this.replaceModalItem(Permiso)}
                  //onClick={() => this.replaceModalItem(index)}>VER USUARIO</button>{' '}
                >
                    <FontAwesomeIcon icon={faEdit} style={{fontSize:"20px"}}></FontAwesomeIcon>
                </button>{' '}
    
                <button
                    className="btn btn-default btn-sm"
                    data-toggle="modal"
                    data-target="#erasePermiso"
                    onClick={() => this.replaceModalItem(Permiso)}
                >
                    <FontAwesomeIcon   icon={faTrashAlt} style={{fontSize:"20px", color:"blue"}}></FontAwesomeIcon>
                </button>{' '}
              </td>
            </tr>
          )
        });

        const PermisosAsignados = this.state.permisosAsignados.map((PermisoA, index) => {
            return (
              <tr key={index} >
      
                <td>{PermisoA.nombrePermiso}</td>
      
                <td>
                  <button className="btn btn-default btn-sm" onClick={() => this.remove(PermisoA.permisoId)}>
                      <FontAwesomeIcon icon={faMinusCircle} style={{fontSize:"20px", color:"red"}}></FontAwesomeIcon> 
                  </button>{' '}
                  <button
                    className="btn btn-default btn-sm"
                    data-toggle="modal"
                    data-target="#editPermiso"
                    onClick={() => this.replaceModalItem(PermisoA)}
                    //onClick={() => this.replaceModalItem(index)}>VER USUARIO</button>{' '}
                  >
                      <FontAwesomeIcon icon={faEdit} style={{fontSize:"20px"}}></FontAwesomeIcon>
                  </button>{' '}
      
                  <button
                    className="btn btn-default btn-sm"
                    data-toggle="modal"
                    data-target="#erasePermiso"
                    onClick={() => this.replaceModalItem(PermisoA)}
                >
                    <FontAwesomeIcon   icon={faTrashAlt} style={{fontSize:"20px", color:"blue"}}></FontAwesomeIcon>
                </button>{' '}
                </td>
              </tr>
            )
        });

        return (

            <div>
                <NavMenu />

                <div >
                    <h1 align="center"> Administracion de Permisos </h1>
                    <br></br>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col ">
                            {/*ttulo permisos y boton crear permiso*/}
                            <div className="row">
                                <div className="col">
                                    <label>Lista de Permisos: </label>
                                </div>
                                <div className="col">
                                    <button
                                        className="btn btn-info btn-sm"
                                        data-toggle="modal"
                                        data-target="#CreatePermiso"
                                        //onClick={this.updateList}
                                    >Crear Permiso</button>

                                </div>

                            </div>
                            <br></br>
                            {/*lista de permisos*/}
                            <div className="row" id="permisos">

                                <div className="table-responsive">
                                    <div className="containertable">
                                        <table className="tableFixHead" id="listaPermisos">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Permiso</th>
                                                    <th scope="col">opciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Permisos}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            {/*titulo de permisos asigandos y combobox tipo de usuario*/}
                            <div className="row">
                                <div className="col">
                                    <label>Permisos Asignados </label>
                                </div>
                                <div className="col">
                                    <select className="form-control form-control-sm" onChange={this.updateTipoUsuario}>
                                        <option value=" " >{"---"}</option>
                                        {this.state.TUsuarios.map((elemento, index) => (
                                            <option key={index} value={elemento.crearTipo}>
                                                {elemento.crearTipo}
                                            </option>))}
                                    </select>
                                </div>

                            </div>
                            <br></br>
                            {/*Lista de permisos Asignados */}
                            <div className="row" id="asignados">

                                <div className="table-responsive" >
                                    <div className="containertable">
                                        <table className="tableFixHead" id="listaPermisos">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Permiso</th>
                                                    <th scope="col">opciones</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                {PermisosAsignados}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <ModalEditarPermiso
                permisoId={this.state.permiso.permisoId}
                nombrePermiso={this.state.permiso.nombrePermiso}
                permisoDescripcion={this.state.permiso.permisoDescripcion}
                saveDetails={this.saveDetails}
                updateList ={this.updateList}
               
                />
                <ModalEliminarPermiso
                 permisoId={this.state.permiso.permisoId}
                 nombrePermiso={this.state.permiso.nombrePermiso}
                 updateList={this.updateList}
                 />
                <ModalCreatePermit
                actualizar={this.updateList}
                />

          </div>

        )
    }
}
export default administrarPermisos

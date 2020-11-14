import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TipoUser from '../../Service/TipoUser';
import ModalEditarPermiso from './ModalEditarPermiso';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faPlusCircle, faEdit, faTrashAlt, faMinusCircle} from '@fortawesome/free-solid-svg-icons'

import "./administrarPermisos.css";

import NavMenu from '../menuAdmin/NavMenu'
import AdminPermisosService from '../../Service/AdminPermisosService';


class administrarPermisos extends Component{
    constructor(props){
        super(props);
        this.state = {
            permisos: [],
            permisosAsignados: [],
            permiso:{},
            TUsuarios: [],
            tipo: "",
        }
        this.updateList = this.updateList.bind(this)
        this.updateTipoUsuario = this.updateTipoUsuario.bind(this)
    }
    componentDidMount() {
        TipoUser.getAll().then(data => this.setState({TUsuarios: data, tipo: data[0].crearTipo}))
        AdminPermisosService.getListaPermisos().then(data=>this.setState({permisos: data}))
    }

    updateTipoUsuario(e){
        this.setState({tipo: e.target.value})
        AdminPermisosService.getListaPermisosNoAsignados(e.target.value).then(data => this.setState({permisos: data}))
        AdminPermisosService.getListaPermisosAsignados(e.target.value).then(data => this.setState({permisosAsignados: data}))
    }

    updateList(){
        AdminPermisosService.getListaPermisosNoAsignados(this.state.tipo).then(data => this.setState({permisos: data}))
        AdminPermisosService.getListaPermisosAsignados(this.state.tipo).then(data => this.setState({permisosAsignados: data}))
        console.log(this.state.tipo);
    }

    replaceModalItem(Permiso) {
        this.setState({ permiso: Permiso})
        console.log(Permiso)
    }

    render() {

        const Permisos = this.state.permisos.map((Permiso, index) => {
          return (
            <tr key={index} >
    
              <td>{Permiso.nombrePermiso}</td>
    
              <td>
                <button className="btn btn-default btn-sm">
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
    
                <button className="btn btn-default btn-sm">
                    <FontAwesomeIcon icon={faTrashAlt} style={{fontSize:"20px", color:"blue"}}></FontAwesomeIcon>
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
                  <button className="btn btn-default btn-sm">
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
      
                  <button className="btn btn-default btn-sm">
                      <FontAwesomeIcon icon={faTrashAlt} style={{fontSize:"20px", color:"blue"}}></FontAwesomeIcon>
                  </button>{' '}
                </td>
              </tr>
            )
          });
    
        return (
    
          <div>
            <NavMenu/>
    
            <div >
              <h1 align="center"> Solicitudes de personal </h1>
              <br></br>
            </div> 
            <div className = "container">
                <div className="row">
                    <div className="col ">
                        {/*ttulo permisos y boton crear permiso*/}
                        <div className ="row">
                            <div className="col">
                                <label>Lista de Permisos: </label>
                            </div>
                            <div className="col">
                                <button className="btn btn-info btn-sm" > Crear Permiso</button>
                                
                            </div>
                        </div>
                        <br></br>
                        {/*lista de permisos*/}
                        <div className ="row" id="permisos">
                            
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
                    <div className = "col">
                        {/*titulo de permisos asigandos y combobox tipo de usuario*/}
                        <div className ="row">
                                <div className="col">
                                    <label>Permisos Asignados </label>
                                </div>
                                <div className="col">
                                    <select className="form-control form-control-sm" onChange={this.updateTipoUsuario}>
                                        <option value =" " >{"---"}</option>    
                                        {this.state.TUsuarios.map((elemento,index) => (
                                        <option key={index} value = {elemento.crearTipo}>
                                            {elemento.crearTipo} 
                                        </option> ))}
                                    </select>
                                </div>
                            
                        </div>
                        <br></br>
                        {/*Lista de permisos Asignados */}
                        <div className ="row" id="asignados">
                            
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
            />

          </div>
        )
    }
}
export default administrarPermisos

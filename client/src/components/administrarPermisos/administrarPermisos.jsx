import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import logo from '../img/logo.png';
import PersonaService from '../../Service/PersonaService';
import TipoUser from '../../Service/TipoUser';
import ModalEditarPermiso from './ModalEditarPermiso';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faPlusCircle, faEdit, faTrashAlt, faMinusCircle} from '@fortawesome/free-solid-svg-icons'

import "./administrarPermisos.css";


class administrarPermisos extends Component{
    constructor(props){
        super(props);
        this.state = {
            permisos: ["solicitud","administrar","listar","crear"],
            permisosAsignados: ["solicitud","administrar","listar","crear"],
            TUsuarios: [],
            tipo: "",
        }
    }
    componentDidMount() {
        TipoUser.getAll().then(data => this.setState({TUsuarios: data, tipo: data[0].crearTipo}))
     
    }

    updateList(e){
        PersonaService.getTiposUser(e.target.value).then(data => this.setState({permisos: data}))
        console.log(e.target.value);
    }

    render() {

        const Permisos = this.state.permisos.map((Permiso, index) => {
          return (
            <tr key={index} >
    
              <td>{Permiso}</td>
    
              <td>
                <button className="btn btn-default btn-sm">
                    <FontAwesomeIcon icon={faPlusCircle} style={{fontSize:"20px", color:"green"}}></FontAwesomeIcon> 
                </button>{' '}
                <button
                    className="btn btn-default btn-sm"
                    data-toggle="modal"
                    data-target="#editPermiso"
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
      
                <td>{PermisoA}</td>
      
                <td>
                  <button className="btn btn-default btn-sm">
                      <FontAwesomeIcon icon={faMinusCircle} style={{fontSize:"20px", color:"red"}}></FontAwesomeIcon> 
                  </button>{' '}
                  <button
                    className="btn btn-default btn-sm"
                    data-toggle="modal"
                    data-target="#editPermiso"
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
    
          
        const salir = () => {
            sessionStorage.removeItem("authToken");
        }
    
        return (
    
          <div>
            <div className="barraNav">
              <nav className="navbar navbar-light justify-content-between">
                <a className="navbar-brand" href="/solicitudes">
                  <img className="logo" src={logo} height="35" alt="logo" />
                </a>
    
                <div>
                  <Link
                    className="btn btn-danger my-2 my-sm-0"
                    type="submit"
                    onClick={salir}
                    to="/"
                    >SALIR</Link>
                </div>
    
    
              </nav>
            </div>
    
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
                                    <select className="form-control form-control-sm" onChange={this.updateList}>
                                        <option value =" " >{"---"}</option>    
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
            />

          </div>
        )
    }
}
export default administrarPermisos

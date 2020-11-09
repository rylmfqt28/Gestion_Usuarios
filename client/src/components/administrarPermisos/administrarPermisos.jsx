import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import logo from '../img/logo.png';
import PersonaService from '../../Service/PersonaService';
import TipoUser from '../../Service/TipoUser';
//import ModalEditarPermiso from './ModalEditarPermiso';


class administrarPermisos extends Component{
    constructor(props){
        super(props);
        this.state = {
            permisos: [],
            permisosAsignados: [],
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

        const Usuarios = this.state.permisos.map((Permiso, index) => {
          return (
            <tr key={index} >
    
              <td>{/*Usuario.ci*/}</td>
              <td>{/*Usuario.nombre} {Usuario.apellido*/}</td>
    
              <td>
                <button className="btn btn-success col-sm-3"
                 // onClick={() => this.putEstadoLista(index, '1')}
                >ACEPTAR</button>{' '}
                <button
                  className="btn btn-danger col-sm-3"
                  //onClick={() => this.putEstadoLista(index, '3')}
                >RECHAZAR</button>{' '}
    
                <button
                  className="btn btn-info col-sm-3"
                  data-toggle="modal"
                  //data-target="#UserData"
                  //onClick={() => this.replaceModalItem(index)}
                  >VER USUARIO</button>{' '}
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
                    <div className ="col">
                        <label>Lista de Permisos: </label>
                        <button type="button" className="btn btn-secondary">Crear Permiso</button>
                    </div>
                    <div className ="col">
                        <div className = "row">
                            <div className="col">
                                <label>Permisos Asignados </label>
                            </div>
                            <div className="col">
                                <select onChange={this.updateList}>
                                    <option value =" " >{"---"}</option>
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "row">
                <div className ="col">
                        hola3
                    </div>
                    <div className ="col">
                        hola4
                    </div>
                </div>
                {/*<div className= "row">
                    {/*boton crear permiso*}
                    <div className = "col">
                        <label className="solicitud-label"> Lista de Permisos: </label>
                    </div>
                    {/*combobox tipo de usuario*}
                    <div className = "col">
                        
                            <label className="solicitud-label"> Ver solicitudes de tipo: </label>
                        
                    </div>
                </div>
            
                <div className= "row">
                    {/*Lista de Permisos*}
                    <div className = "col">  
                        <div className="container">
                            <div className="table-responsive">

                                <div className="containerTabla">
                                    <table className="table"  id="lista">
                                        <thead >
                                            <tr>
                                                <th scope="col">CI</th>
                                                <th scope="col">Usuarios</th>
                                                <th scope="col">Opciones</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {/*Usuarios*}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        //lista de permisos asignados
                    }
                    <div className = "col">
                        <div className="container">
                            <div className="table-responsive">

                                <div className="containerTabla">
                                    <table className="table"  id="lista">
                                        <thead >
                                            <tr>
                                                <th scope="col">CI</th>
                                                <th scope="col">Usuarios</th>
                                                <th scope="col">Opciones</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {/*Usuarios*}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>
    
            {/*<ModalEditarPermiso
            />*/}

          </div>
        )
    }
}
export default administrarPermisos
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

        const Permisos = this.state.permisos.map((Permiso, index) => {
          return (
            <tr key={index} >
    
              <td>{/*Permiso.nombre.ci*/}</td>
    
              <td>
                <button className="btn btn-success col-sm-3"
                >Añadir</button>{' '}
                <button
                  className="btn btn-danger col-sm-3"
                  data-toggle="modal"
                  //data-target="#UserData"
                  //onClick={() => this.replaceModalItem(index)}>VER USUARIO</button>{' '}
                >edicion</button>{' '}
    
                <button
                  className="btn btn-info col-sm-3"
                  data-toggle="modal"
                  >eliminar</button>{' '}
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
                <div className="row ">
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
                                <select class="form-control form-control-sm" onChange={this.updateList}>
                                    <option value =" " >{"---"}</option>
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className = "row justify-content-around">
                    <div className ="col-5">
                        <div className="table-respomsive">
                            <div className="containertable">
                                <table className="table" id="listaPermisos">
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
                    <div className ="col-5">
                        <div className="container">
                        <div className="table-respomsive">
                            <div className="containertable">
                                <table className="table" id="listaPermisos">
                                    <thead>
                                        <tr>
                                            <th scope="col">Permisos asignados</th>
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
                </div>
            </div>
    
            {/*<ModalEditarPermiso
            />*/}

          </div>
        )
    }
}
export default administrarPermisos
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import logo from '../img/logo.png';

import './Solicitudes.css';
import PersonaService from '../../Service/PersonaService';
import TipoUser from '../../Service/TipoUser';
//import ModalSolicitud from './ModalSolicitud';


class Solicitudes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Usuarios: [],
      user: {},
      TUsuarios: [],
      Tuser: {
              tipoUsuarioID:null, 
              tipoUsuarioNombre:null, 
              tipoUsuarioDescripcion:null}, date:'SN',
    }
  }

  componentDidMount() {
    TipoUser.getAll().then(data => this.setState({ TUsuarios: data }))
    PersonaService.getAll().then(data => this.setState({ Usuarios: data }))
    PersonaService.getTiposUser(this.state.date).then(data => this.setState({ Usuarios: data }))
    
  }
  


  replaceModalItem(id) {
    this.setState({ requiredItem: id });
    this.setState({ user: this.state.Usuarios[id] })
   }



  render() {
    
  
    const Usuarios = this.state.Usuarios.map((Usuario, index) => {
      return (
        <tr key={index} >

          <td>{Usuario.ci}</td>
          <td>{Usuario.nombre} {Usuario.apellido}</td>

          <td>
            <button className="btn btn-secondary"
           >ACEPTAR</button>{' '}
            <button 
            className="btn btn-danger"
            >RECHAZAR</button>{' '}

            <button 
            className="btn btn-outline-info" 
            data-toggle="modal" 
            data-target="#UserData"
            onClick={() => this.replaceModalItem(index)}>VER USUARIO</button>{' '}
          </td>
        </tr>
      )
    });

        return (
      <div>
        <div className="barraNav">
          <nav className="navbar navbar-light justify-content-between">
            <a className="navbar-brand" href="#">
              <img className="logo" src={logo} height="35" alt="logo" />
             </a>

            <div>
              <Link
                className="btn btn-outline-info my-2 my-sm-0"
                type="submit"
                to="/crearTipoUsuario"
              >Crear Tipo Usuario</Link>
            </div>


          </nav>
        </div>

        <h1 align="center"> Solicitudes de personal </h1>

        <span>Ver solicitudes de tipo</span>

        <select  className="selector" 
            onChange={(e) => this.setState({date: e.target.value })}>
            {this.state.TUsuarios.map(elemento => (
            <option key={elemento.id} value = {elemento.usuarioID}>
                {elemento.nombreUs} 
           </option> ))}
           </select>
        <br></br>
        <br></br>
        <table className="table" id="lista">
          <thead >
            <tr>
              <th scope="col">CI</th>
              <th scope="col">Usuarios</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>

          <tbody>
            {Usuarios}
          </tbody>
        </table>
        {/*<ModalSolicitud
            ci= {this.state.user.ci}
            usuarioNombre = {this.state.user.nombre}
            usuarioApellido = {this.state.user.apellido}
            paisID={this.state.user.paisID}
            ciudadID={this.state.user.ciudadID}
            correo = {this.state.user.correo}
            telefono={this.state.user.telefono}
        />*/}
      </div>
    )
  }
}


export default Solicitudes;

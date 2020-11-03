import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import logo from '../img/logo.png';

import './Solicitudes.css';
import PersonaService from '../../Service/PersonaService';
import ModalSolicitud from './ModalSolicitud';


class Solicitudes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Usuarios: [],
      user: {},
      tipos:[
        "Administrador",
        "SN"
      ],
      // User: {
      //   CI:null,
      //   usuarioNombre: null,
      //   usuarioApellido: null,
      //   paisID:null,
      //   ciudadID:null,
      //   correo:null,
      //   telefono:null,
      // }
    }
    this.updateList = this.updateList.bind(this)
  }

  /*componentDidMount(){
    PersonaService.getAll().then(data => this.setState({Usuarios: data}))
    const url="http://localhost:8080/persona/obtener/10010"
    fetch(url).then(respuesta=> respuesta.json())
    .then(resultado => this.setState({User: resultado}))
    
    console.log(this.state.User)
    
  }*/


  componentDidMount() {
    //PersonaService.getAll().then(data => this.setState({ Usuarios: data }))
    PersonaService.getTiposUser(this.state.tipos[0]).then(data => this.setState({ Usuarios: data }))
  }
  
  
  /*upListaAceptado(id) {
    
    this.setState({ user: this.state.Usuarios[id] })
    
    console.log(this.state.Usuarios[id].ci);
    PersonaService.upListaUser(this.state.Usuarios[id].ci, "1" );
    //PersonaService.getTiposUser('SN').then(data => this.setState({ Usuarios: data }))
  
  }*/
  updateList(e){
    PersonaService.getTiposUser(e.target.value).then(data => this.setState({Usuarios: data}))
    console.log(e.target.value);
  }

  replaceModalItem(id) {
    this.setState({ requiredItem: id });
    this.setState({ user: this.state.Usuarios[id] })
  }

  render() {
    
    
    
    //console.log(this.state.user.ci);
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

    //const requiredItem = this.state.requiredItem;
    //let modalData = this.state.Usuarios[requiredItem];
    //console.log(this.state.user);
    
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

        <select  className="select" id="select" onChange={this.updateList}>
          {this.state.tipos.map((tipo, index)=>(
            <option key={index} value ={tipo}>{tipo}</option>
          ))
          }
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
        <ModalSolicitud
            ci= {this.state.user.ci}
            usuarioNombre = {this.state.user.nombre}
            usuarioApellido = {this.state.user.apellido}
            paisID={this.state.user.paisNombre}
            ciudadID={this.state.user.ciudadNombre}
            correo = {this.state.user.correo}
            telefono={this.state.user.telefono}
            tipoUsuario = {this.state.user.tipoUsuario}
        />
      </div>
    )
  }
}


export default Solicitudes;

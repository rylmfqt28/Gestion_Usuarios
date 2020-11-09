import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import logo from '../img/logo.png';

import './Solicitudes.css';
import PersonaService from '../../Service/PersonaService';
import TipoUser from '../../Service/TipoUser';
//import ModalSolicitud from './ModalSolicitud';
import ModalSolicitud from './ModalSolicitud';
import { data } from 'jquery';



class Solicitudes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Usuarios: [],
      user: {},
      TUsuarios: [],
      tipo: ""
  }


    this.updateList = this.updateList.bind(this)
  }

  componentDidMount() {
    TipoUser.getAll().then(data => this.setState({TUsuarios: data, tipo: data[0].crearTipo}))
   //PersonaService.getAll().then(data => this.setState({ Usuarios: data }))

  //PersonaService.getTiposUser('SN').then(data => this.setState({ Usuarios: data }))
 
  }
  

  updateList(e){
    PersonaService.getTiposUser(e.target.value).then(data => this.setState({Usuarios: data}))
    console.log(e.target.value);
  }

  putEstadoLista(id, estado) {

    this.setState({ user: this.state.Usuarios[id] });

    var nomUser = this.state.Usuarios[id].nombre;
    var tipoUsuario = this.state.Usuarios[id].tipoUsuario;
    if (estado === '3') {
      var opcion = window.confirm("¿Está seguro que quiere RECHAZAR la solicitud de " + nomUser+"?");
      if (opcion) {
        console.log(this.state.Usuarios[id].ci);
        PersonaService.putListaUser(this.state.Usuarios[id].ci, estado);
        //revisar
        PersonaService.getTiposUser(tipoUsuario).then(data => this.setState({ Usuarios: data }))
      }
    } else if (estado === '1') {
      //var opcion=window.confirm("Esta seguro que quiere ACEPTAR la solicitud de "+nomUser);

      console.log(this.state.Usuarios[id].ci);
      PersonaService.putListaUser(this.state.Usuarios[id].ci, estado);
      let tempUsuarios = PersonaService.putListaUser(this.state.Usuarios[id].ci, estado);
      this.setState({Usuarios: tempUsuarios.then()})
      PersonaService.getTiposUser(tipoUsuario).then(data => this.setState({ Usuarios: data }))

    }


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
            <button className="btn btn-success"
              onClick={() => this.putEstadoLista(index, '1')}
            >ACEPTAR</button>{' '}
            <button
              className="btn btn-danger"
              onClick={() => this.putEstadoLista(index, '3')}
            >RECHAZAR</button>{' '}

            <button
              className="btn btn-info"
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
            <a className="navbar-brand" href="/solicitudes">
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
        <div>

          <h1 align="center"> Solicitudes de personal </h1>

          <span>Ver solicitudes de tipo</span>
          <div>
            <select  className="selector" 
              onChange={this.updateList}>
              <option value =" " >{"---"}</option>
              {this.state.TUsuarios.map((elemento,index) => (
              <option key={index} value = {elemento.crearTipo}>
                {elemento.crearTipo} 
              </option> ))}
            </select>
          </div>


        </div> 
        

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
            nombreUsuario = {this.state.user.nombreUsuario}
            motivo = {this.state.user.motivo}
        />
      </div>
    )
  }
}


export default Solicitudes;

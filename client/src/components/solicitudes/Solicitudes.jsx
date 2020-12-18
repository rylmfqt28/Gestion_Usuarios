import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Solicitudes.css';
import PersonaService from '../../Service/PersonaService';
import TipoUser from '../../Service/TipoUser';
import ModalSolicitud from './ModalSolicitud';
import NavMenu from '../menuAdmin/NavMenu'



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
 
  }
  

  updateList(e){
    PersonaService.getTiposUser(e.target.value).then(data => this.setState({Usuarios: data}))
  }

  putEstadoLista(id, estado) {

    this.setState({ user: this.state.Usuarios[id] });

    var nomUser = this.state.Usuarios[id].nombre;
    var tipoUsuario = this.state.Usuarios[id].tipoUsuario;
    if (estado === '3') {
      var opcion = window.confirm("¿Está seguro que quiere RECHAZAR la solicitud de " + nomUser+"?");
      if (opcion) {
        PersonaService.putListaUser(this.state.Usuarios[id].ci, estado);
        PersonaService.getTiposUser(tipoUsuario).then(data => this.setState({ Usuarios: data }));
        PersonaService.getTiposUser(tipoUsuario).then(data => this.setState({ Usuarios: data }));
      }
    } else if (estado === '1') {
      var opcion1 = window.confirm("Esta seguro que quiere ACEPTAR la solicitud de "+nomUser);
      if(opcion1){
        PersonaService.putListaUser(this.state.Usuarios[id].ci, estado);
        PersonaService.getTiposUser(tipoUsuario).then(data => this.setState({ Usuarios: data }));
        PersonaService.getTiposUser(tipoUsuario).then(data => this.setState({ Usuarios: data }));
      }
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
            <button className="btn btn-success col-sm-3"
              onClick={() => this.putEstadoLista(index, '1')}
            >ACEPTAR</button>{' '}
            <button
              className="btn btn-danger col-sm-3"
              onClick={() => this.putEstadoLista(index, '3')}
            >RECHAZAR</button>{' '}

            <button
              className="btn btn-info col-sm-3"
              data-toggle="modal"
              data-target="#UserData"
              onClick={() => this.replaceModalItem(index)}>VER USUARIO</button>{' '}
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
          <div className="containerSelect">
          <label className="solicitud-label"> Ver solicitudes de tipo: </label>
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

        </div> 
        <br></br>
        <br></br>
        <br></br>
     <div>


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
           
            {Usuarios}
           </tbody>
           </table>
           </div>
       </div>

    </div>

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

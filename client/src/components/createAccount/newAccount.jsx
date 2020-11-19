import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './newAccount.css'
import ModalEula from './modalEula.js';
import { Link } from "react-router-dom"
import axios from 'axios';
import logo from '../img/logo.png';
import RegistroService from '../../Service/RegistroService'
import { Component } from 'react';
import PersonaService from '../../Service/PersonaService';
import TipoUser from '../../Service/TipoUser'

import $ from 'jquery';

import ModalSolicitudC from './ModalSolicitudC';

class NewAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      ci: "",
      genero: "",
      pais: [],
      ciudad: [],
      direccion: "",
      correo: "",
      telefono: "",
      userName: "",
      tipoUsuario: [],
      password: "",
      confPassword: "",
      Usuarios: [],
      TUsuarios: [],
      motivo: " ",
      paisID: 0,
      ciudadID: 0,
      tipoID: 11,
      value: ''
    }
    this.capturarDatosModal=this.capturarDatosModal.bind(this);
    this.updateList = this.updateList.bind(this)
    this.insertarDatoRegistro=this.insertarDatoRegistro.bind(this);
    this.verficarTipo=this.verficarTipo.bind(this)
  }
  

  validarNombre = (event) => {

    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    let letras = " áéíóúñÑ";

    if (this.state.nombre.length !== 50) {
      //console.log('llego malditod');
      if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letras.indexOf(tecla) !== -1)) {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value + tecla
        });
      }
    } else {
      alert('El maximo de caracteres es de 50');
    }
  }

  validarApellido = (event) => {
    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    let letras = " áéíóúñÑ";
    if (this.state.apellido.length !== 50) {
      //console.log('llego malditod');
      if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letras.indexOf(tecla) !== -1)) {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value + tecla
        });
      }
    } else {
      alert('El maximo de caracteres es de 50');
    }

  }

  validarNombreUsuario = (event) => {
    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    let letras = " áéíóúñÑ@_";
    let numeros = "1234567890"
    if (this.state.userName.length !== 15) {
      //console.log('llego malditod');
      if ((key <= 90 && key >= 64) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (key === 95) || (letras.indexOf(tecla) !== -1) || (numeros.indexOf(tecla) !== -1)) {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value + tecla
        });
      }
    } else {
      alert('El maximo de caracteres es de 50');
    }
  }
  validarNumeros = (event) => {
    let numeros = "1234567890"
    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    if (this.state.ci.length !== 9) {
      if ((key <= 57 && key >= 48) || (numeros.indexOf(tecla) !== -1)) {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value + tecla
        });
      }
    } else {
      alert('El maximo de digitos en el campo es de 9')
    }

  }
  validarCorreo = (event) => {

    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    if (this.state.correo.length !== 200) {
      //console.log('llego malditod');
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value + tecla
      });
      //}
    } else {
      alert('El maximo de caracteres es de 200');
    }


  }
  validarTelefono = (event) => {
    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    let numeros = "1234567890"
    if (this.state.telefono.length !== 8) {
      if ((key <= 57 && key >= 48) || (numeros.indexOf(tecla) !== -1)) {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value + tecla
        });
      }
    } else {
      alert('El maximo de digitos en el campo es de 8')
    }
  }




  validarContraseña = (event) => {
    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    let numeros = "1234567890"
    let letrasContraseña = "áéíóúñÑ*";
    if (this.password !== 8) {
      console.log('llego malditod');
      if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letrasContraseña.indexOf(tecla) !== -1) || (numeros.indexOf(tecla) !== -1)) {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value + tecla
        });
      }
    } else {
      alert('Minimo 8 caracteres');
    }
  }

  validarVacios = () => {

    const name = document.getElementById('name');
    const lastName = document.getElementById('lastName');
    const cedula = document.getElementById('cedula');
    const country = document.getElementById('country');
    const city = document.getElementById('city');
    const address = document.getElementById('address');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const userName = document.getElementById('userName');
    const typeUser = document.getElementById('typeUser');
    const password = document.getElementById('password');
    const confPassword = document.getElementById('confPassword');

    name.classList.add('input-error');
    lastName.classList.add('input-error');
    cedula.classList.add('input-error');
    country.classList.add('input-error');
    city.classList.add('input-error');
    address.classList.add('input-error');
    email.classList.add('input-error');
    phone.classList.add('input-error');
    userName.classList.add('input-error');
    typeUser.classList.add('input-error');
    password.classList.add('input-error');
    confPassword.classList.add('input-error');
  }

  validarContraseña = (event) => {
    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    let numeros = "1234567890"
    let letrasContraseña = "áéíóúñÑ*";
    if (this.password !== 8) {
      //console.log('llego malditod');
      if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letrasContraseña.indexOf(tecla) !== -1) || (numeros.indexOf(tecla) !== -1)) {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value + tecla
        });
      }
    } else {
      alert('Minimo 8 caracteres');
    }
  }
  validarDir = (event) => {
    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    if (this.state.direccion.length !== 250) {
      //console.log('llego malditod');
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value + tecla
      });
    } else {
      alert('El maximo de caracteres es de 250');
    }
  }

  handleDeleteKeyUserName = (event) => {
    let key = event.keyCode || event.which;
    if (this.state.userName.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.userName.substring(0, this.state.userName.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });
    }

  }
  handleDeleteKey = (event) => {
    let key = event.keyCode || event.which;
    if (this.state.nombre.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.nombre.substring(0, this.state.nombre.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });
    }
  }

  handleDeleteName = (event) => {
    let key = event.keyCode || event.which;
    if (this.state.nombre.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.nombre.substring(0, this.state.nombre.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });
    }
  }
  handleDeleteKeyEmail = (event) => {
    let key = event.keyCode || event.which;
    if (this.state.correo.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.correo.substring(0, this.state.correo.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });
    }
  }
  handleDeleteKeyEmail = (event) => {
    let key = event.keyCode || event.which;
    if (this.state.correo.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.correo.substring(0, this.state.correo.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });
    }
  }


  handleDeleteKeyTelf = (event) => {
    let key = event.keyCode || event.which;
    if (this.state.telefono.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.telefono.substring(0, this.state.telefono.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });

    }

  }
  handleDeleteKeyCi = (event) => {
    let key = event.keyCode || event.which;
    if (this.state.ci.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.ci.substring(0, this.state.ci.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });

    }

  }

  handleDeleteKeyPassword = (event) => {

    let key = event.keyCode || event.which;
    if (this.state.password.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.password.substring(0, this.state.password.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });
    }
    // Borra para el campo apellido



    //borra campo nombre de usuario
    if (this.state.userName.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.userName.substring(0, this.state.userName.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });

    }

    //borra campo contraseña
    if (this.state.password.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.password.substring(0, this.state.password.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });

    }
    //borra campo confirmar-contraseña
    if (this.state.confPassword.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.confPassword.substring(0, this.state.confPassword.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });
    }

  }
  handleDeleteKeyAp = (event) => {
    let key = event.keyCode || event.which;
    if (this.state.apellido.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.apellido.substring(0, this.state.apellido.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });

    }
  }

  handleDeleteKeyDir = (event) => {
    let key = event.keyCode || event.which;
    if (this.state.direccion.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.direccion.substring(0, this.state.direccion.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });
    }
  }

  updateListContries = (e) => {

    for (const value of this.state.pais) {
      if (value.paisNombre === e.target.value) {
        //console.log(value.paisID)
        this.setState({ paisID: value.paisID })
      }
    }
    RegistroService.getAllCountries(e.target.value).then(data => this.setState({ pais: data }))
    this.updateListCities(e.target.value);

  }

  updateCityId = (e) => {
    for (const value of this.state.ciudad) {
      if (value.ciudadNombre === e.target.value) {
        //console.log(value.ciudadID)
        this.setState({ ciudadID: value.ciudadID })
      }
    }
  }
//aquiiiiiiiiii
  updateTypeUserID = (e) => {
    for (const value of this.state.TUsuarios) {
      if (value.crearTipo === e.target.value) {
        //console.log(value.tipoUsuarioID)
        this.setState({ tipoID: value.tipoUsuarioID })
      }
    }
    this.setState({value: e.target.value});
  }

insertarDatoRegistro = async() =>{
  try {
    if (this.state.userName.trim() !== '') {
      const res = await axios.get('/api/user/' + this.state.userName.trim());

      //console.log(res.data);
      if (res.data === null) {
        //console.log(this.state.paisID)
        try {
          const resp = await axios.post("http://localhost:8080/api/nuevoUsuario", {
            usuarioNombre: this.state.nombre,
            usuarioApellido: this.state.apellido,
            CI: this.state.ci,
            genero: this.state.genero,
            paisID: this.state.paisID,
            ciudadID: this.state.ciudadID,
            direccion: this.state.direccion,
            correo: this.state.correo,
            telefono: this.state.telefono,
            nombreUsuario: this.state.userName,
            password: this.state.password,
            tipoUsuarioID: this.state.tipoID,
            motivo: this.state.motivo
          })
          console.log(resp);
          alert('Se creo el tipo de usuario Exitosamente');
        } catch (err) {
          // Handle Error Here
          console.error(err);
        }

      } else {
        alert('El Nombre de usuario ya existe');
        //console.log("El nombre de usuario ya existe");
      }
    } else {
      //mensaje campos vacios "Existen campos vacios"
      alert('Existen campos vacíos, rellenar los campos restantes');
      //console.log("");
    }
  } catch (error) {
    console.log(error);
  }
}

  //actualiza la lista de los paises
  updateListCities = (pais) => {
    RegistroService.getAllCities(pais).then(data => this.setState({ ciudad: data }))
  }
  //visualiza paises y tipos de usuario
  componentDidMount() {
    RegistroService.getAllCountries().then(data => this.setState({ pais: data }))
    TipoUser.getAll().then(data => this.setState({ TUsuarios: data, tipo: data[0].crearTipo }))
  }
  //Actualiza lista de usuarios
  updateList(e) {
    PersonaService.getTiposUser(e.target.value).then(data => this.setState({ Usuarios: data }))
  }

  //Registra los usuarios

capturarDatosModal = (motivo) => {
  this.setState({ motivo: motivo })
  //console.log("El motivo es: " + motivo)
}

  registerButtonEvent = async (event) => {
    event.preventDefault();
    if (this.state.nombre !== '' && this.state.apellido !== '' && this.state.ci !== '' && this.state.direccion !== '' && this.state.correo !== '' && this.state.telefono !== '' && this.state.userName !== '' && this.state.password !== '' && this.state.confPassword !== '') {
      if (this.state.password !== this.state.confPassword) {

        //mensaje contraseña "Las constraseñas no coinciden"
        document.getElementById('avisoCorrecto').style.display = "none";
        document.getElementById('avisoNuevo').style.display = "none";
        document.getElementById('avisoPass').style.display = "block";
      } else {

        //mesaje datos correctos
        document.getElementById('avisoCorrecto').style.display = "block";
        document.getElementById('avisoNuevo').style.display = "none";
        document.getElementById('avisoPass').style.display = "none";
        
        //modal de tipo usuario
        this.verficarTipo()
      }
    } else {
      document.addEventListener('DOMContentLoaded', (event) => {
        //mensaje campos vacios "Existen campos vacios"
        document.getElementById("avisoCorrecto").style.display = "none";
        document.getElementById('avisoNuevo').style.display = "block";
        document.getElementById('avisoPass').style.display = "none";
      })
    }



  }

  handleInputChange = () => {

  }
  handleOnChange(e) {
    //console.log('selected option', e.target.value);

    this.setState({ genero: e.target.value });
  }

  verficarTipo(){
    //console.log("llego a verificar tipo")

    if (this.state.tipoID !== 11){
      $(function(){
        $("#TipoUserData").modal('show')
      })
    }else {
      this.insertarDatoRegistro()
    }
  }

  verificar(tipo) {
    if (tipo === "Cliente") { return true } else { return false }

  }


  render() {

    return (

      <div>
        <div className="barraNav">
          <nav className="navbar navbar-light justify-content-between">
            <a className="navbar-brand" href="/">
              <img className="logo" src={logo} height="35" alt="logo" />
            </a>
            <Link className="btn btn-outline-info" value="Login" type="reset" to="/" >Iniciar Sesión</Link>
          </nav>
        </div>
        <div className="col" align="center">
          <div>
            <div className="form-register">
              <div className="row">
                <h1 className="titulo-registro"> Formulario de registro </h1>
              </div>
              <br />
              <form onSubmit={this.registerButtonEvent}>
                <div className="form-group">
                  <label>
                    <b>Nombres:</b>
                  </label>

                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    size="60"
                    placeholder="Ingrese sus nombres"
                    name="nombre"
                    onKeyPress={this.validarNombre}
                    onKeyDown={this.handleDeleteName}
                    onChange={this.handleInputChange}
                    value={this.state.nombre}
                    required
                  />
                  <div className="form-group">
                    <b>Apellidos: </b>
                    <input
                      id="lastName"
                      type="text"
                      className="form-control"
                      size="60"
                      placeholder="Ingrese su Apellidos"
                      name="apellido"
                      onKeyPress={this.validarApellido}
                      onKeyDown={this.handleDeleteKeyAp}
                      onChange={this.handleInputChange}
                      value={this.state.apellido}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <b>Cédula de Identidad:</b>
                    <input
                      id="cedula"
                      type="text"
                      className="form-control"
                      size="60"
                      placeholder="Ingrese su cédula de identidad"
                      name="ci"
                      onKeyPress={this.validarNumeros}
                      onKeyDown={this.handleDeleteKeyCi}
                      onChange={this.handleInputChange}
                      value={this.state.ci}
                      required

                    />
                  </div>
                  <div className="form-group">
                    <label className="form-check-label">
                      <b className="genero">Género: </b>
                    </label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="male"
                        name="gender"
                        onChange={(e) => this.handleOnChange(e)}
                        value="Masculino"
                        required

                      />

                      <label htmlFor="male" className="form-check-label"> Masculino</label>
                      
                      <input
                        className="form-check-inputM"
                        type="radio"
                        id="female"
                        name="gender"
                        onChange={(e) => this.handleOnChange(e)}
                        value="Femenino"
                        required
                      />
                      <br></br>
                      <label htmlFor="female" className="form-check-label">Femenino</label>

                      <input
                        type="radio"
                        id="other"
                        className="form-check-inputF"
                        name="gender"
                        onChange={(e) => this.handleOnChange(e)}
                        value="Otro"
                        required
                      />
                      <label htmlFor="other" className="form-check-label"> Otro</label>

                    </div>

                  </div>

                  <div className="form-group">
                    <b>Pais:</b>
                    <select className="form-control" id="country" required onChange={this.updateListContries}>
                      <option value="1" >{"Seleccione una Opción"}</option>
                      {this.state.pais.map((elemento, i) => (
                        <option key={i} value={elemento.paisNombre}>
                          {elemento.paisNombre}
                        </option>))}
                    </select>
                  </div>
                  <div className="form-group">
                    <b>Ciudad:</b>
                    <select className="form-control" id="city" required onChange={this.updateCityId} >
                      <option value=" " >{"Seleccione una Opción"}</option>
                      {this.state.ciudad.map((elemento, i) => (
                        <option key={i} value={elemento.ciudad}>
                          {elemento.ciudadNombre}
                        </option>))}

                    </select>
                  </div>
                  <div className="form-group">
                    <b>Dirección:</b>
                    <input
                      id="address"
                      type="text"
                      className="form-control"
                      size="60"
                      placeholder="Ingrese su dirección"
                      name="direccion"
                      maxLength="250"
                      onKeyPress={this.validarDir}
                      onKeyDown={this.handleDeleteKeyDir}
                      onChange={this.handleInputChange}
                      value={this.state.direccion}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <b>Correo Electronico:</b>
                    <input
                      id="email"
                      type="text"
                      className="form-control"
                      size="60"
                      minLength="3"
                      placeholder="Ingrese su dirección de correo"
                      name="correo"
                      onKeyPress={this.validarCorreo}
                      onKeyDown={this.handleDeleteKeyEmail}
                      onChange={this.handleInputChange}
                      value={this.state.correo}
                      pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <b>Teléfono:</b>
                    <input
                      id="phone"
                      type="text"
                      className="form-control"
                      size="60"
                      placeholder="Ingrese su número telefónico"
                      name="telefono"
                      maxLength="8"
                      required
                      onKeyPress={this.validarTelefono}
                      onKeyDown={this.handleDeleteKeyTelf}
                      onChange={this.handleInputChange}
                      value={this.state.telefono}
                    />
                  </div>
                  <div className="form-group">
                    <b>Nombre de usuario:</b>
                    <input
                      id="userName"
                      type="text"
                      className="form-control"
                      size="60"
                      placeholder="Ingrese su nombre de usuario"
                      name="userName"
                      minLength="5"
                      maxLength="15"
                      onKeyPress={this.validarNombreUsuario}
                      onKeyDown={this.handleDeleteKeyUserName}
                      onChange={this.handleInputChange}
                      value={this.state.userName}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <b>Tipo de usuario:</b>
                    <select className="form-control" id="typeUser" required
                      onChange={this.updateTypeUserID}>

                      {this.state.TUsuarios.map((elemento, index) => (
                        <option key={index} selected={this.verificar(elemento.crearTipo)} value={elemento.crearTipo}>
                          {elemento.crearTipo}
                        </option>))}
                    </select>

                  </div>
                  <div className="form-group">
                    <b>Contraseña:</b>
                    <input
                      type="password"
                      className="form-control"
                      size="60"
                      placeholder="Ingrese su contraseña"
                      name="password"
                      id="password"
                      minLength="8"
                      required
                      onKeyPress={this.validarContraseña}
                      onKeyDown={this.handleDeleteKeyPassword}
                      onChange={this.handleInputChange}
                      value={this.state.password}
                    />
                  </div>
                  <div className="form-group"><b>Confirmar contraseña:</b>
                    <input
                      type="password"
                      className="form-control"
                      size="60"
                      placeholder="Confirme su contraseña"
                      name="confPassword"
                      id="confPassword"
                      minLength="8"
                      onKeyPress={this.validarContraseña}
                      onKeyDown={this.handleDeleteKeyPassword}
                      onChange={this.handleInputChange}
                      value={this.state.confPassword}
                      required
                    /></div>
                  <div className="checkbox-confirmar">

                    <input type="checkbox" id="checkbox" name="aceppt" required value="" />  <label>
                      <b>acepto los</b>
                      <a href="#eulaPage" onClick={this.check} data-toggle="modal">
                        <b>Términos y condiciones</b>
                      </a>
                    </label>
                  </div>
                  <br />
                  <div className="contenedor-btn">

                    <Link className="btn btn-cancelar" value="Login" type="reset" to="/" >Cancelar</Link>

                    <button className="btn btn-aceptar " type='submit' value="Login"  >Registrar</button>
                  </div>

                  <div className="avisos">
                    <div id="avisoCorrecto" className="alert alert-success">Datos correctos!</div>
                    <div id="avisoNuevo" className="alert alert-warning">Existen campos vacios</div>
                    <div id="avisoPass" className="alert alert-warning">Contraseñas no coinciden</div>
                  </div>
                  <br />
                </div>
              </form>
            </div>
            <div>
              <ModalEula />
              <ModalSolicitudC
              capturarDatosModal = {this.capturarDatosModal}
              crearTipo = {this.state.value}
              insertarDatoRegistro={this.insertarDatoRegistro}
              />
            </div>
          </div>
        </div >
      </div >
    )

  }
}

export default NewAccount;
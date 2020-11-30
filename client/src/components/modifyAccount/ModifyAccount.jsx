import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modifyAccount.css'
import { Link } from "react-router-dom"
import axios from 'axios';
import logo from '../img/logo.png';
import RegistroService from '../../Service/RegistroService'
import { Component } from 'react';
import PersonaService from '../../Service/PersonaService';
import TipoUser from '../../Service/TipoUser'

import $ from 'jquery';


class modifyAccount extends Component {
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
    this.updateList = this.updateList.bind(this)
    this.insertarDatoRegistro = this.insertarDatoRegistro.bind(this);
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

  validarContraseña = (event) => {
    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    let numeros = "1234567890"
    let letrasContraseña = "áéíóúñÑ*";
    if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letrasContraseña.indexOf(tecla) !== -1) || (numeros.indexOf(tecla) !== -1)) {
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value + tecla
      });
    }

  }
  validarConfirmarContraseña = (event) => {
    let key = event.keyCode || event.which;
    let tecla = String.fromCharCode(key);
    let numeros = "1234567890"
    let letrasContraseña = "áéíóúñÑ*";

    //console.log('llego malditod');
    if ((key <= 90 && key >= 65) || (key <= 122 && key >= 97) || (key === 164) || (key === 165) || (letrasContraseña.indexOf(tecla) !== -1) || (numeros.indexOf(tecla) !== -1)) {
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value + tecla
      });
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
    password.classList.add('input-error');
    confPassword.classList.add('input-error');
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
  
  handleDeleteKeyPassword = (event) => {

    let key = event.keyCode || event.which;
    if (this.state.password.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.password.substring(0, this.state.password.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });
    }
  }

  handleDeleteKeyConfPassword = (event) => {
    let key = event.keyCode || event.which;
    if (this.state.confPassword.length !== 0 && (key === 8 || key === 127)) {
      let nuevo = this.state.confPassword.substring(0, this.state.confPassword.length - 1);
      this.setState({
        ...this.state,
        [event.target.name]: nuevo
      });
    }
  }

  insertarDatoRegistro = async () => {
    try {
      if (this.state.userName.trim() !== '') {
        if (this.state.password.length >= 8) {
          //console.log('llego malditod');
          if (this.state.confPassword.length >= 8) {
            const resCi = await axios.get('/api/userci/' + this.state.ci.trim());
            //console.log(res.data);
            if (resCi.data === null) {
              const res = await axios.get('/api/user/' + this.state.userName.trim());
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
                  })
                  console.log(resp);
                  alert('Se creo el usuario Exitosamente');
                } catch (err) {
                  // Handle Error Here
                  console.error(err);
                }

              } else {
                alert('El Nombre de usuario ya existe');
                //console.log("El nombre de usuario ya existe");
              }
            } else {
              alert('La cédula que pretende ingresar ya existe')
            }
          } else {
            alert('Minimo 8 caracteres en el campo "Confirmar Contraseña"');
          }
        } else {
          alert('Minimo 8 caracteres en el "Campo Contraseña"');
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


  registerButtonEvent = async (event) => {
    event.preventDefault();
    if (this.state.nombre !== '' && this.state.apellido !== '' && this.state.ci !== '' && this.state.direccion !== '' && this.state.correo !== '' && this.state.telefono !== '' && this.state.userName !== '' && this.state.password !== '' && this.state.confPassword !== '') {
      if (this.state.password !== this.state.confPassword) {

        //mensaje contraseña "Las constraseñas no coinciden"
        document.getElementById('avisoCorrecto').style.display = "none";
        document.getElementById('avisoNuevo').style.display = "none";
        document.getElementById('avisoPass').style.display = "block";
      } else {
        if(this.state.password.length >= 8 && this.state.confPassword.length >= 8){
          //mesaje datos correctos
          document.getElementById('avisoCorrecto').style.display = "block";
          document.getElementById('avisoNuevo').style.display = "none";
          document.getElementById('avisoPass').style.display = "none";

        }else{
          alert("La contraseña debe contener como minimo 8 caracteres.");
        }
        
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

    this.setState({ habilitar: e.target.value });
  }

  verficarTipo() {
    //console.log("llego a verificar tipo")

    if (this.state.tipoID !== 11) {
      $(function () {
        $("#TipoUserData").modal('show')
      })
    } else {
      this.insertarDatoRegistro()
    }
  }

  habilitarCampos(){
    $("#password").prop('disabled', false);
    $("#confPassword").prop('disabled', false);
   }

  render() {

    return (

      <div>
        <div className="barraNav">
          <nav className="navbar navbar-light justify-content-between">
            <a className="navbar-brand" href="/">
              <img className="logo" src={logo} height="35" alt="logo" />
            </a>
          </nav>
        </div>
        <div className="col" align="center">
          <div>
            <div className="form-register">
              <div className="row">
                <h1 className="titulo-registro"> Administrar Cuenta </h1>
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
                      onChange={this.handleInputChange}
                      value={this.state.ci}
                      required

                    />
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
                      onChange={this.handleInputChange}
                      value={this.state.direccion}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <b>Correo Electronico:</b>
                    <input
                      id="email"
                      type="email"
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
                      onChange={this.handleInputChange}
                      value={this.state.userName}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-check-label">
                      <b className="habilita"> </b>
                    </label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="habilitar"
                        name="habilitar"
                        onChange={(e) => this.handleOnChange(e)}
                        value="habilitado"
                        onClick={this.habilitarCampos}
                      />

                      <label className="form-check-label"> Habilitar cambio de contraseña</label>
                    </div>

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
                      disabled
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
                      onKeyDown={this.handleDeleteKeyConfPassword}
                      onChange={this.handleInputChange}
                      value={this.state.confPassword}
                      required
                      disabled
                    /></div>
                  
                  <br />
                  <div className="contenedor-btn">

                    <Link className="btn btn-cancelar" value="Login" type="reset" to="/" >Cancelar</Link>

                    <button className="btn btn-aceptar " type='submit' value="Login" onClick={this.validarVacios} >Guardar</button>
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
          </div>
        </div >
      </div >
    )

  }
}

export default modifyAccount;
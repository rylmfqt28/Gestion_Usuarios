import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modifyAccount.css'
import { Link } from "react-router-dom"
import axios from 'axios';

import RegistroService from '../../Service/RegistroService'
import { Component } from 'react';
import PersonaService from '../../Service/PersonaService';
import NavMenu from '../menuAdmin/NavMenu'
import NavMenuUser from '../menuAdmin/NavMenuUser';
import Alerta from '../alert/Alerta';
import $ from 'jquery';
import ModalContrasena from './ModalContrasena';
import { Alert } from 'bootstrap';

class ModifyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      ci: "",
      oldUser: "",
      genero: "",
      pais: [],
      paisOld: "",
      paisSeleccionado: "Bol",
      ciudad: [],
      ciudadOld: "",
      ciudadSeleccionado: "",
      direccion: "",
      correo: "",
      telefono: "",
      userName: "",
      tipoUsuario: [],
      password: "",
      confPassword: "",
      Usuarios: {},
      TUsuarios: [],
      paisID: 0,
      ciudadID: 0,
      tipoID: 11,
      value: ''
    }

    this.updateList = this.updateList.bind(this)
    //this.insertarDatoRegistro = this.insertarDatoRegistro.bind(this);
    this.updateDatosRegistro = this.updateDatosRegistro.bind(this);
    this.peticionGet = this.peticionGet.bind(this);
    this.updateCityId = this.updateCityId.bind(this);
    this.updateListContries = this.updateListContries.bind(this);
    //this.updateUserDate = this.updateUserDate.bind(this);
    //this.verificarCiudad = this.verificarCiudad.bind(this)
  }
  // Usuarios=this.state.Usuarios;
  peticionGet = async () => {
    const res = await axios.get('/api/accountData/' + sessionStorage.getItem("ci"))
    console.log(res.data);
    console.log(res.data[0].paisNombre);

    this.setState({
      nombre: res.data[0].usuarioNombre,
      apellido: res.data[0].usuarioApellido,
      ci: res.data[0].ci,
      correo: res.data[0].correo,
      direccion: res.data[0].direccion,
      paisOld: res.data[0].paisNombre,
      ciudadOld: res.data[0].ciudadNombre,
      userName: res.data[0].nombreUsuario,
      telefono: res.data[0].telefono,
      oldUser: res.data[0].nombreUsuario,
      paisID: res.data[0].paisID,
      ciudadID: res.data[0].ciudadID

    });
    console.log(this.state.paisOld + "Ponele");
    console.log(this.state.ciudadOld);
    RegistroService.getAllCities(this.state.paisOld).then(data => this.setState({ ciudad: data }));
  }

  componentDidMount() {

    this.peticionGet();
    RegistroService.getAllCountries().then(data => this.setState({ pais: data }))
    console.log(this.state.ciudadNombre + "El vieoj");


  }

  //actualiza la lista de paises
  updateListContries = (e) => {

    for (const value of this.state.pais) {
      if (value.paisNombre === e.target.value) {
        console.log(value.paisID + " pais ID Valor")
        //this.setState({ paisID: value.paisID })
        this.state.paisID = value.paisID;
        console.log(this.state.paisID + " mirar aqui Pais")
        break;
      }
    }
    RegistroService.getAllCountries(e.target.value).then(data => this.setState({ pais: data }))
    this.setState({ paisSeleccionado: e.target.value })
    console.log(this.state.paisSeleccionado);
    this.updateListCities(e.target.value);
    console.log(this.state.ciudadSeleccionado + "3");

  }
  //actualiza la lista de ciudades
  updateListCities = (pais) => {
    RegistroService.getAllCities(pais).then(data => this.setState({ ciudad: data}))
    //console.log(this.state.paisID +" Este es el buenardo")
  }

  updateCityId = (e) => {
    for (const value of this.state.ciudad) {
      if (value.ciudadNombre === e.target.value) {
        //console.log(value.ciudadID)
        this.setState({ paisID: value.paisID })
        this.state.ciudadID = value.ciudadID;
        //console.log(this.state.ciudadID + " mirar aqui ciudad")
        //console.log(this.state.paisID + " mirar aqui PAis")
        break;
      }else{
        //this.state.ciudadID = value.ciudadID;
        console.log("no entro......")
        //console.log(this.state.ciudadSeleccionado + " mirar aqui ciudad el ELse")
        //console.log(this.state.ciudadID + " mirar ID aqui ciudad el ELse")
      }
      
    }


  }
  verificarPais = (pais, pId) => {

    if (this.state.paisOld === pais) {
      // this.setState({ paisID: pId})
     // this.state.paisID = pId;
      console.log(this.state.paisID+ " el id de la Pais");
      return true
    } else {
      
      return false
    };

  }
  verificarCiudad = (ciudad, id) => {


    if (this.state.ciudadOld === ciudad) {
     // console.log(this.state.ciudadID+ " el id de la ciudad"); 
     // this.state.ciudadSeleccionado = ciudad;
    
      return true 
    } else {
      
      
      return false
    };

  }




  validarNombre = (event) => {
    if (event.target.value[0] !== " ") {
      if (event.target.value.length !== 51) {
        if (event.target.value.match("^[Ññíóáéú a-zA-Z ]*$") != null) {
          this.setState({ nombre: event.target.value })
          this.setState({ validate: true })
        } else {
          this.setState({ validate: false })
          console.log(false)
        }
      } else {
       
        Alerta.AlertaInfo("El maximo de caracteres es de 50")
      }

    } else {
      Alerta.AlertaInfo("El nombre debe empezar con un caracter")
    
    }

  }
  validarApellido = (event) => {

    if (event.target.value[0] !== " ") {
      if (event.target.value.length !== 51) {
        if (event.target.value.match("^[Ññíóáéú a-zA-Z ]*$") != null) {
          this.setState({ apellido: event.target.value })
          this.setState({ validate: true })
        } else {
          this.setState({ validate: false })
          console.log(false)
        }
      } else {
        Alerta.AlertaInfo("El maximo de caracteres es de 50")
      }

    } else {
      Alerta.AlertaInfo("El apellido debe empezar con un caracter")
    }

  }

  validarNumerosCi = (event) => {
    if (event.target.value[0] !== " ") {
      if (event.target.value.length !== 10) {
        if (event.target.value.match("^[1234567890]*$") != null) {
          this.setState({ ci: event.target.value })
          this.setState({ validate: true })
        } else {
          this.setState({ validate: false })
          console.log(false)
        }
      } else {
        Alerta.AlertaInfo("El maximo de números es de 9")
        
      }

    } else {
      alert("El ci debe empezar con un numero")
      Alerta.AlertaInfo("El ci debe empezar con un numero")
    }

  }
 


  validarDir = (event) => {
    if (event.target.value[0] !== " ") {
      if (event.target.value.length !== 250) {
        if (event.target.value.match("^[Ññíóáéú@.1234567890-_#&/ a-zA-Z ]*$") != null) {
          this.setState({ direccion: event.target.value })
          this.setState({ validate: true })
        } else {
          this.setState({ validate: false })
          console.log(false)
        }
      } else {
        
        Alerta.AlertaInfo("El maximo de caracteres es de 250")
      }

    } else {
      Alerta.AlertaInfo("El campo debe empezar con un caracter")
    }
  }


  validarCorreo = (event) => {
    if (event.target.value[0] !== " ") {
      if (event.target.value.length !== 200) {
        if (event.target.value.match("^[Ññíóáéú@.1234567890-_ a-zA-Z ]*$") != null) {
          this.setState({ correo: event.target.value })
          this.setState({ validate: true })
        } else {
          this.setState({ validate: false })
          console.log(false)
        }
      } else {
        Alerta.AlertaInfo("El maximo de caracteres es de 200")
      }

    } else {
     
      Alerta.AlertaInfo("El campo debe empezar con un caracter")
    }


  }
  validarNumerosTelefono = (event) => {
    if (event.target.value[0] !== " ") {
      if (event.target.value.length !== 9) {
        if (event.target.value.match("^[1234567890]*$") != null) {
          this.setState({ telefono: event.target.value })
          this.setState({ validate: true })
        } else {
          this.setState({ validate: false })
          console.log(false)
        }
      } else {  
        Alerta.AlertaInfo("El maximo de números es de 8")
      }

    } else {
      Alerta.AlertaInfo("El teléfono debe empezar con un numero")
    }


  }

  validarNombreUsuario = (event) => {
    if (event.target.value[0] !== " ") {
      if (event.target.value.length !== 15) {
        if (event.target.value.match("^[Ññíóáéú@.a-zA-Z0-9]*$") != null) {
          this.setState({ userName: event.target.value })
          this.setState({ validate: true })
        } else {
          this.setState({ validate: false })
          console.log(false)
        }
      } else {
        Alerta.AlertaInfo("El maximo de carateres es de 15")
      
      }

    } else {
      Alerta.AlertaInfo("El Nombre de usuario debe empezar con un caracter")

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


  //actualiza la lista de los paises
  updateListCities = (pais) => {
    RegistroService.getAllCities(pais).then(data => this.setState({ ciudad: data }))
  }
  //visualiza paises y tipos de usuario
  /*componentDidMount() {
    RegistroService.getAllCountries().then(data => this.setState({ pais: data }))
    TipoUser.getAll().then(data => this.setState({ TUsuarios: data, tipo: data[0].crearTipo }))
  }*/
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
        if (this.state.password.length >= 8 && this.state.confPassword.length >= 8) {
          //mesaje datos correctos
          document.getElementById('avisoCorrecto').style.display = "block";
          document.getElementById('avisoNuevo').style.display = "none";
          document.getElementById('avisoPass').style.display = "none";

          //modal de tipo usuario
          this.verficarTipo()
        } else {
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

  /* componentDidMount() {
     const Usuarios = this.state.Usuarios
     PersonaService.getUser(sessionStorage.getItem("ci")).then(data => this.setState({ Usuarios: data }));
     console.log(Usuarios)
   }*/
  redireccionar() {
    $("#ModalContrasena").modal('show')
  }
  //Actualiza los datos
  updateUserDate = async () => {
    console.log(this.state.paisID);
    console.log(this.state.ciudadID);
    if(this.state.nombre.length>=3){
      if(this.state.apellido.length>=3){
          if(this.state.ci.length>=3){
            if(this.state.telefono.length>=7){
              try {
                await axios.put('http://localhost:8080/api/updateAccountInfo/' + sessionStorage.getItem("ci"), {
                  usuarioNombre: this.state.nombre,
                  usuarioApellido: this.state.apellido,
                  CI: this.state.ci,
                  paisID: this.state.paisID,
                  ciudadID: this.state.ciudadID,
                  direccion: this.state.direccion,
                  correo: this.state.correo,
                  telefono: this.state.telefono,
                  nombreUsuario: this.state.userName,
          
                });
                sessionStorage.setItem("ci", this.state.ci);
                sessionStorage.setItem("userName", this.state.userName);
                console.log(this.state.nombreUsuario);
                Alerta.AlertaSuccess('Los datos fueron guardados Exitosamente');
             
              } catch (err) {
                // Handle Error Here
                console.error(err);
              }
            }else{
              Alerta.AlertaInfo("El minimo en el campo telefono es de 7 digitos")
            
            }
          }else{
            Alerta.AlertaInfo("El minimo en el campo Ci es de 3 digitos")
        
    
        }

        }else{
          Alerta.AlertaInfo("El minimo en el campo apellido es de 3 caracteres")
         
        }

      }else{
        Alerta.AlertaInfo("El minimo en el campo nombre es de 3 caracteres")
      
    }
  }
    
  //funcion para actualizar los datos del usuario
  updateDatosRegistro = async (event) => {
    //this.validarVacios();
    event.preventDefault();
    try {
      if (this.state.userName.trim() !== '') {

        if (this.state.ci.trim() === sessionStorage.getItem("ci") && this.state.userName.trim() === sessionStorage.getItem("userName")) {

          this.updateUserDate();
        }

        else if (this.state.ci.trim() === sessionStorage.getItem("ci") && this.state.userName.trim() !== sessionStorage.getItem("userName")) {

          const res = await axios.get('/api/user/' + this.state.userName.trim());
          if (res.data === null) {

            this.updateUserDate();

          } else {
            Alerta.AlertaDanger('El Nombre de usuario ya existe');
            

          }

        }
        else if (this.state.ci.trim() !== sessionStorage.getItem("ci") && this.state.userName.trim() === sessionStorage.getItem("userName")) {

          const resCi = await axios.get('/api/userci/' + this.state.ci.trim());
          if (resCi.data === null) {

            this.updateUserDate();

          } else {
            Alerta.AlertaDanger('La cédula que pretende ingresar ya existe')
          }

        }
        else if (this.state.ci.trim() !== sessionStorage.getItem("ci") && this.state.userName.trim() !== sessionStorage.getItem("userName")) {

          const resCi = await axios.get('/api/userci/' + this.state.ci.trim());
          if (resCi.data === null) {

            const res = await axios.get('/api/user/' + this.state.userName.trim());
            if (res.data === null) {

              this.updateUserDate();

            } else {
              Alerta.AlertaDanger('El Nombre de usuario ya existe')
              

            }

          } else {
            Alerta.AlertaDanger('La cédula que pretende ingresar ya existe');
         
          }

        }


      } else {
        //mensaje campos vacios "Existen campos vacios"
      
        Alerta.AlertaInfo('Existen campos vacíos, rellenar los campos restantes');
        //console.log("");
      }
    } catch (error) {
      console.log(error);
      Alerta.AlertaDanger('Ocurrio un ERROR no se realizaron los cambios');
    }
  }

  render() {


    function showMenu(props) {
      if (sessionStorage.getItem("nombreTipo") === 'Administrador') {
        return <NavMenu />
      }
      else {
        return <NavMenuUser />
      }
    }
    return (

      <div>
        {showMenu()}
        <div className="col" align="center">
          <div>
            <div className="form-register">
              <div className="row">
                <h1 className="titulo-registro"> Administrar Cuenta </h1>
              </div>
              <br />
              <form onSubmit={this.updateDatosRegistro}>
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

                    onChange={(e) => this.validarNombre(e)}
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
                      onChange={(e) => this.validarApellido(e)}


                      value={this.state.apellido}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <b>Cédula de Identidad:</b>
                    <input
                      id="cedula"
                      className="form-control"
                      size="60"
                      placeholder="Ingrese su cédula de identidad"
                      name="ci"

                     
                      onChange={(e) => this.validarNumerosCi(e)}
                      value={this.state.ci}
                      required

                    />
                  </div>
                  <div className="form-group">
                    <b>Pais:</b>
                    <select className="form-control" id="country" required onChange={this.updateListContries}>
                      <option value="" >{"Seleccione una Opción"}</option>
                      {this.state.pais.map((elemento, i) => (
                        <option key={i} selected={this.verificarPais(elemento.paisNombre, elemento.paisID)} value={elemento.paisSeleccionado}>
                          {elemento.paisNombre}
                        </option>))}
                    </select>
                  </div>
                  <div className="form-group">
                    <b>Ciudad:</b>
                    <select className="form-control" id="city" required onChange={this.updateCityId} >
                      <option value="" >{"Seleccione una Opción"}</option>
                      {this.state.ciudad.map((elemento, i) => (
                        <option key={i} selected={this.verificarCiudad(elemento.ciudadNombre,elemento.ciudadID)} value={elemento.ciudadNombre}>
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
                   
                      onChange={(e) => this.validarDir(e)}
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
                      onChange={(e) => this.validarCorreo(e)}
                      value={this.state.correo}
                      pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <b>Teléfono:</b>
                    <input
                      id="phone"
                      className="form-control"
                      size="60"
                      placeholder="Ingrese su número telefónico"
                      name="telefono"
                      required
                      onChange={(e) => this.validarNumerosTelefono(e)}
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

                      onChange={(e) => this.validarNombreUsuario(e)}
                      value={this.state.userName}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <b data-toggle="modal">Contraseña: </b>
                    <input
                      type="password"
                      className="form-control"
                      size="60"
                      placeholder="Para cambiar su contraseña haga click aquí"
                      name="password"
                      id="password"
                      minLength="8"
                      //required
                      onKeyPress={this.validarContraseña}
                      onKeyDown={this.handleDeleteKeyPassword}
                      onChange={this.handleInputChange}
                      value={this.state.password}
                      onClick={this.redireccionar}
                    />
                  </div>

                  <br />

                  <div className="contenedor-btn">

                    <Link className="btn btn-cancelar" value="Login" type="reset" to="/"  >Cancelar</Link>

                    <button className="btn btn-aceptar" type="submit" value="Login" onClick={this.validarVacios} >Guardar</button>
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
          <ModalContrasena />
        </div >
      </div >
    )

  }
}

export default ModifyAccount;
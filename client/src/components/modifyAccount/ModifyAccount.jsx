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

import $ from 'jquery';
import ModalContrasena from './ModalContrasena';

class ModifyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      ci: "",
      genero: "",
      pais: [],
      paisOld:"",
      paisSeleccionado:"Bol",
      ciudad: [],
      ciudadOld:[],
      ciudadSeleccionado:"",
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
    this.insertarDatoRegistro = this.insertarDatoRegistro.bind(this);
    this.peticionGet = this.peticionGet.bind(this);
    //this.verificarCiudad = this.verificarCiudad.bind(this)
  }
  // Usuarios=this.state.Usuarios;
  peticionGet= async()=>{  
    const res = await axios.get('/api/accountData/'+sessionStorage.getItem("ci"))
    console.log(res.data);
    console.log(res.data[0].paisNombre);
    
    this.setState({nombre: res.data[0].usuarioNombre,
                  apellido: res.data[0].usuarioApellido,
                  ci:res.data[0].ci,                
                  correo: res.data[0].correo,
                  direccion: res.data[0].direccion,
                  paisOld: res.data[0].paisNombre,
                  ciudadOld: res.data[0].ciudadNombre,
                  userName: res.data[0].usuarioNombre,
                  telefono: res.data[0].telefono

    });
    console.log(this.state.paisOld+"Ponele");
    console.log(this.state.ciudadOld);
    RegistroService.getAllCities(this.state.paisOld).then(data => this.setState({ ciudad: data }));
    }
    
  componentDidMount(){
    
    this.peticionGet();
    RegistroService.getAllCountries().then(data => this.setState({ pais: data }))
    console.log(this.state.ciudadNombre+"El vieoj");
    
    
  }

  //actualiza la lista de paises
  updateListContries = (e) => {

    for (const value of this.state.pais) {
      if (value.paisNombre === e.target.value) {
        console.log(value.paisID)
        this.setState({ paisID: value.paisID }) 
      }
    }
    RegistroService.getAllCountries(e.target.value).then(data => this.setState({ pais: data }))
    this.setState({paisSeleccionado: e.target.value})
    console.log(this.state.paisSeleccionado);
    this.updateListCities(e.target.value);
    console.log(this.state.ciudadSeleccionado+"3");
    
  }
  //actualiza la lista de ciudades
  updateListCities = (pais) => {
    RegistroService.getAllCities(pais).then(data => this.setState({ ciudad: data }))
    
  }

  updateCityId = (e) => {
    for (const value of this.state.ciudad) {
      if (value.ciudadSeleccionado === e.target.value) {
        //console.log(value.ciudadID)
        this.setState({ ciudadID: value.ciudadID })
      }
    }
   
    
  }
  verificarPais=(pais, pId)=>{
    
    if(this.state.paisOld===pais){ 
     // this.setState({ paisID: pId})
      return true } else { 
       
        return false };

  }
  verificarCiudad=(ciudad)=>{
    
   
    if(this.state.ciudadOld===ciudad){  return true } else { 
      this.state.ciudadSeleccionado=ciudad;
      return false };
    
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
        alert("El maximo de caracteres es de 50")
      }

    } else {
      alert("El nombre debe empezar con un caracter")
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
        alert("El maximo de caracteres es de 50")
      }

    } else {
      alert("El nombre debe empezar con un caracter")
    }

  }

  validarNumerosCi = (event) => {
    if (event.target.value[0] !== " ") {
      if (event.target.value.length !== 9) {
        if (event.target.value.match("^[1234567890]*$") != null) {
          this.setState({ ci: event.target.value })
          this.setState({ validate: true })
        } else {
          this.setState({ validate: false })
          console.log(false)
        }
      } else {
        alert("El maximo de números es de 9")
      }

    } else {
      alert("El ci debe empezar con un numero")
    }

  }
  validarMinCi = (event) => {
    if (event.target.value.length < 3) {
      alert("Minimo de 3 numeros")
    }

  }
  validar

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
        alert("El maximo de caracteres es de 250")
      }

    } else {
      alert("El campo debe empezar con un caracter")
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
        alert("El maximo de caracteres es de 200")
      }

    } else {
      alert("El campo debe empezar con un caracter")
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
        alert("El maximo de números es de 8")
      }

    } else {
      alert("El teléfono debe empezar con un numero")
    }


  }

  validarNombreUsuario = (event) => {
    if (event.target.value[0] !== " ") {
      if (event.target.value.length !== 15) {
        if (event.target.value.match("^[Ññíóáéú@. a-zA-Z ]*$") != null) {
          this.setState({ userName: event.target.value })
          this.setState({ validate: true })
        } else {
          this.setState({ validate: false })
          console.log(false)
        }
      } else {
        alert("El maximo de carateres es de 15")
      }

    } else {
      alert("El Nombre de usuario debe empezar con un caracter")
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

                      minLength="7"
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
                        <option key={i} selected={this.verificarPais(elemento.paisNombre, elemento.paisID)} value={elemento.paisNombre}>
                          {elemento.paisNombre}
                      </option>))}
                    </select>
                  </div>
                  <div className="form-group">
                    <b>Ciudad:</b>
                    <select className="form-control" id="city" required onChange={this.updateCityId} >
                      <option value="" >{"Seleccione una Opción"}</option>
                      {this.state.ciudad.map((elemento, i) => (
                        <option key={i} selected={this.verificarCiudad(elemento.ciudadNombre)} value={elemento.ciudadSeleccionado}>
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
                      required
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
          <ModalContrasena />
        </div >
      </div >
    )

  }
}

export default ModifyAccount;
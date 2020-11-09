import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import { Link } from "react-router-dom"
import { Fragment, useState } from 'react';
import axios from 'axios';
import logo from '../img/logo.png';



var timeout = setTimeout(function(){  
                                     
              localStorage.clear()}, 300000);

window.onload = timeout;

const Login = () => {

  const [datos, setDatos] = useState({
    username: '',
    password: '',
    isChecked: false,
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  }

  const onChangeCheckbox = event => {
    setDatos({
      ...datos,
        isChecked: event.target.checked
    })
}
  
   const componentDidMount = () => {
  if (localStorage.checkbox && localStorage.username !== "") {
    setDatos({
      ...datos,
          isChecked: true,
          username: localStorage.username,
          password: localStorage.password
      })
  }
}

  const loginSubmit = () => {
  const { username, password, isChecked } = datos
  if (isChecked && username !== "") {
      localStorage.username = username
      localStorage.password = password
      localStorage.checkbox = isChecked
  }
  // here call the API to signup/login
}

  //funcion que permite direccionear
  function ingersar(rol) {
    
    switch (rol) {

      case 'Administrador':
        window.location.pathname = '/home';
        sessionStorage.setItem("authToken", true);
        break;
      case '2':
        //ventana de cliente
        break;
      default:
        //no hacer nada
        break;


    }

  }
  const startButtonEvent = async (event) => {
    
    event.preventDefault();

    if (datos.username !== '' && datos.password !== '') {
      const res = await axios.get('/api/user/' + datos.username);
      if (res.data !== null) {
        if (res.data.nombreUsuario === datos.username && res.data.password === datos.password) {
          console.log(res.data.nombreEstado);
          if(res.data.nombreEstado === "Habilitado"){
            //redireccionar a la pagina de crear usuario
            document.getElementById('avisoValido').style.display = "block";
            document.getElementById('avisoVacio').style.display = "none";
            document.getElementById('avisoNo').style.display = "none";
            document.getElementById('avisoPendiente').style.display = "none";
            document.getElementById('avisoReachazado').style.display = "none";
            document.getElementById('avisoDeshabilitado').style.display = "none";
            ingersar(res.data.tipoUsuarioNombre);
          }else{
            if(res.data.nombreEstado === "Pendiente"){
              document.getElementById('avisoValido').style.display = "none";
              document.getElementById('avisoVacio').style.display = "none";
              document.getElementById('avisoNo').style.display = "none";
              document.getElementById('avisoPendiente').style.display = "block";
              document.getElementById('avisoReachazado').style.display = "none";
              document.getElementById('avisoDeshabilitado').style.display = "none";
            }
            if(res.data.nombreEstado === "Deshabilitado"){
              document.getElementById('avisoValido').style.display = "none";
              document.getElementById('avisoVacio').style.display = "none";
              document.getElementById('avisoNo').style.display = "none";
              document.getElementById('avisoPendiente').style.display = "none";
              document.getElementById('avisoReachazado').style.display = "none";
              document.getElementById('avisoDeshabilitado').style.display = "block";
            }
            if(res.data.nombreEstado === "Rechazado"){
              document.getElementById('avisoValido').style.display = "none";
              document.getElementById('avisoVacio').style.display = "none";
              document.getElementById('avisoNo').style.display = "none";
              document.getElementById('avisoPendiente').style.display = "none";
              document.getElementById('avisoReachazado').style.display = "block";
              document.getElementById('avisoDeshabilitado').style.display = "none";
            }
          }
          

        } else {
          //Mensaje de "Cuenta de usuario no valida"
          document.getElementById('avisoValido').style.display = "none";
          document.getElementById('avisoVacio').style.display = "none";
          document.getElementById('avisoNo').style.display = "block";
          document.getElementById('avisoPendiente').style.display = "none";
          document.getElementById('avisoReachazado').style.display = "none";
          document.getElementById('avisoDeshabilitado').style.display = "none";
        }
      } else {
        //Mensaje de "Cuenta de usuario no valida"
        document.getElementById('avisoValido').style.display = "none";
        document.getElementById('avisoVacio').style.display = "none";
        document.getElementById('avisoNo').style.display = "block";
        document.getElementById('avisoPendiente').style.display = "none";
        document.getElementById('avisoReachazado').style.display = "none";
        document.getElementById('avisoDeshabilitado').style.display = "none";
      }
    } else {
      //mensaje campos vacios "Existen campos vacios"
      document.getElementById('avisoValido').style.display = "none";
      document.getElementById('avisoVacio').style.display = "block";
      document.getElementById('avisoNo').style.display = "none";
      document.getElementById('avisoPendiente').style.display = "none";
      document.getElementById('avisoReachazado').style.display = "none";
      document.getElementById('avisoDeshabilitado').style.display = "none";
    }
  }
  
  const { username, password, isChecked} = datos

  return (
    <Fragment>
      <div>

        <div className="barraNav">
          <nav className="navbar navbar-light justify-content-between">
            <a className="navbar-brand" href="/">
              <img className="logo" src={logo} height="35" alt="logo" />
             </a>

            <div>
              <Link
                className="btn btn-outline-info my-2 my-sm-0"
                type="submit"
                to="/register"
              >REGISTRARSE</Link>
            </div>


          </nav>
        </div>

        <div className="containerPrincipal">


          <form onSubmit={startButtonEvent} >
            <div className="containerSecundario">
              <div className="form-group">
                <label className="title-inicio">
                  <h2><b>
                    Inicio de sesión
                        </b></h2>

                </label>
                <br />
                <br />

                <label>
                  Usuario:
                        </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  maxLength="15"
                  minLength="5"
                  placeholder="Ingrese su usuario"
                  name="username"
                  onChange={handleInputChange}
                  value={username.replace(/ /g, "")}
                  onClickCapture={componentDidMount}
                />
                <br />
                <label>Contraseña: </label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  minLength="8"
                  placeholder="Ingrese su contraseña"
                  name="password"
                  onChange={handleInputChange}
                  value={password}
                />

                <br />
                <br />
                <div className="checkbox">

                  <input type="checkbox" checked={isChecked} onChange={onChangeCheckbox} name="IsRememberMe" value=""/>  <label>
                    Recordar cuenta
                          </label>

                </div>

                <button className="btn btn-primary" value="Login" onClick={loginSubmit} id="lsRememberMe">Iniciar sesión</button>

                <div className="enlaceRegister">
                  <a href="/register">
                    ¿Aún no tienes una cuenta? registrate aqui
                          </a>

                </div>
                <br />
                <div className="avisos">
                  <div id="avisoValido" className="alert alert-success">Bienvenido!</div>
                  <div id="avisoVacio" className="alert alert-warning">Existen campos vacios</div>
                  <div id="avisoNo" className="alert alert-danger">Cuenta de usuario no valida</div>
                  <div id="avisoPendiente" className="alert alert-warning">Tu cuenta aun no fue aceptada</div>
                  <div id="avisoReachazado" className="alert alert-warning">Tu solicitud fue rechazada</div>
                  <div id="avisoDeshabilitado" className="alert alert-danger">Tu cuenta fue deshabilitada</div>
                </div>
              
              </div>
            </div>
          </form>
        </div>

      </div>
    </Fragment>
  );
}

export default Login;
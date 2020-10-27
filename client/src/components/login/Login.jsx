import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import { Link } from "react-router-dom"
import { Fragment, useState } from 'react';
import axios from 'axios';


const Login = () => {

  const [datos, setDatos] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  }
  
  const startButtonEvent = async (event) => {

    event.preventDefault();
    if (datos.username !== '' && datos.password !== '') {
      const res = await axios.get('/api/user/' + datos.username);
      if (res.data !== null) {
        if (res.data.nombreUsuario === datos.username && res.data.password === datos.password) {
          //redireccionar a la pagina de crear usuario
          console.log("redirecciona ya a crear tipo de usuario");
          document.getElementById('avisoValido').style.display = "block";
          document.getElementById('avisoVacio').style.display = "none";
          document.getElementById('avisoNo').style.display = "none";
        } else {
          //Mensaje de "Cuenta de usuario no valida"
          console.log("nel mensaje de error no es el admin o el usuario no existe");
          document.getElementById('avisoValido').style.display = "none";
          document.getElementById('avisoVacio').style.display = "none";
          document.getElementById('avisoNo').style.display = "block";
        }
      } else {
        //Mensaje de "Cuenta de usuario no valida"
        console.log("nel mensaje de error no es el admin o el usuario no existe");
        document.getElementById('avisoValido').style.display = "none";
        document.getElementById('avisoVacio').style.display = "none";
        document.getElementById('avisoNo').style.display = "block";
      }
    } else {
      //mensaje campos vacios "Existen campos vacios"
      document.getElementById('avisoValido').style.display = "none";
      document.getElementById('avisoVacio').style.display = "block";
      document.getElementById('avisoNo').style.display = "none";
    }
  }

  return (
    <Fragment>
      <div>

        <div className="barraNav">
          <nav className="navbar navbar-light justify-content-between">
            <a className="navbar-brand">Empresa</a>
            <form className="form-inline">

              <Link
                className="btn btn-outline-info my-2 my-sm-0"
                type="submit"
                to="/register"
              >REGISTRARSE</Link>
            </form>
          </nav>
        </div>


        <div className="containerPrincipal">


          <form onSubmit={startButtonEvent}>
            <div className="containerSecundario">
              <div className="form-group">
                <label className="title-inicio">
                  <h2>
                    Inicio de sesión
                        </h2>

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
                />

                <br />
                <br />
                <div className="checkbox">

                  <input
                    type="checkbox" value=""
                  />  <label>
                    Recordar cuenta
                          </label>

                </div>

                <button className="btn btn-primary">Iniciar sesión</button>

                <div className="enlaceRegister">
                  <a href="./register">
                    ¿Aún no tienes una cuenta? registrate aqui
                          </a>

                </div>
                <div className="avisos">
                  <div id="avisoValido" className="alert alert-success">Bienvenido!</div>
                  <div id="avisoVacio" className="alert alert-warning">Existen campos vacios</div>
                  <div id="avisoNo" className="alert alert-danger">Cuenta de usuario no valida</div>
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
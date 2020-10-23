import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import {Link}from "react-router-dom"

const Login = ()=> {
  return (
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


        <form>
          <div className="containerSecundario">
            <div className="form-group">
              <label className="title-inicio">
                <b>
                  Inicio de sesión
                        </b>

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
              />
              <br />
              <label>Contraseña: </label>
              <br />
              <input
                type="password"
                className="form-control"
                minLength="8"
                placeholder="Ingrese su contraseña"
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
                  <a href="./request">
                    ¿Aún no tienes una cuenta? registrate aqui
                          </a>

                </div>

              </div>
            </div>
        </form>
      </div>

      </div>
  );
}


export default Login;
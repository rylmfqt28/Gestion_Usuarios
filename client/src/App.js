import React from 'react';
//import logo from './logo.svg';
//import FormCrearTipoUsuario from './components/crearTipoUsuario';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div>
      <div className="barraNav">
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand">Empresa</a>
          <form className="form-inline">

            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">REGISTARSE</button>
          </form>
        </nav>
      </div>


      <div className="containerPrincipal">



        <div className="containerSecundario">
          <div className="from-group">
            <label>
              <b>
                Inicio de seción
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
              className="from-control"
              maxLength="15"
              minLength="5"
              placeholder="Ingrese su usuario"
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="from-control"
              minLength="8"
              placeholder="Ingrese su contraseña"
            />
            <br />
            <br />
            <div className="checkbox">
              <label>
                <input
                  type="checkbox" value=""
                />
                            Recordar cuenta
                          </label>

            </div>

            <button className="btn btn-primary">Iniciar sesion</button>

            <div className="enlaceRegister">
              <a href="">
                ¿Aún no tienes una cuenta? registrate aqui
                          </a>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

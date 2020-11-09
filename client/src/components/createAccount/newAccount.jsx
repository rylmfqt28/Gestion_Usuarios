import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './newAccount.css'
import { Link } from "react-router-dom"
import { Fragment, useState } from 'react';
import axios from 'axios';
import logo from '../img/logo.png';

const newAccount = () => {

return (
    <div>
        <div className="barraNav">
          <nav className="navbar navbar-light justify-content-between">
            <a className="navbar-brand" href="/">
              <img className="logo" src={logo} height="35" alt="logo" />
             </a>

          </nav>
        </div>

        <div >
        <label>
                  Nombres:
                        </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  maxLength="15"
                  minLength="5"
                  placeholder="Ingrese sus nombres"
                  name="nombres"
                />
                <br />
                <label>Apellidos: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  minLength="8"
                  placeholder="Ingrese su Apellidos"
                  name="apellidos"
                />
                <label>
                  Cédula de Identidad:
                        </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  maxLength="15"
                  minLength="5"
                  placeholder="Ingrese su cédula de identidad"
                  name="cedula"
                />

                <label>
                  Género:  
                        </label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                />
                <label for="male">
                  Masculino
                        </label>
                
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                />
                <label for="female">
                  Femenino
                        </label>
                
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                />
                <label for="other">
                  Otro
                        </label>
                <br />



                <label>
                  Pais:
                        </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  maxLength="15"
                  minLength="5"
                  placeholder="Seleccione su país"
                  name="pais"
                />
                <label>
                  Ciudad:
                        </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  maxLength="15"
                  minLength="5"
                  placeholder="Ingrese su ciudad"
                  name="ciudad"
                />
                <label>
                  Dirección:
                        </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  maxLength="15"
                  minLength="5"
                  placeholder="Ingrese su dirección"
                  name="direccion"
                />
                <label>
                  Correo Electronico:
                        </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  maxLength="15"
                  minLength="5"
                  placeholder="Ingrese su dirección de correo"
                  name="correo"
                />
                <label>
                  Teléfono:
                        </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  maxLength="15"
                  minLength="5"
                  placeholder="Ingrese su número telefónico"
                  name="telefono"
                />
                <label>
                  Nombre de usuario:
                        </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  maxLength="15"
                  minLength="5"
                  placeholder="Ingrese su nombre de usuario"
                  name="nombres"
                />
                <label>
                  Contraseña:
                        </label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  minLength="8"
                  placeholder="Ingrese su contraseña"
                  name="password"
                />
                <label>
                  Confirmar contraseña:
                        </label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  minLength="8"
                  placeholder="Confirme su contraseña"
                  name="conf-password"
                />

                    <div className="checkbox">

                    <input type="checkbox"  name="aceppt" value=""/>  <label>
                    acepto los 
                    <a href="/register">
                     Términos y condiciones
                          </a>
                    </label>
                    </div>

                    <button className="btn btn-primary" value="Login" >Cancelar</button>
                    <button className="btn " value="Login" >Registrar</button>
                
        </div>


    </div>


);
}
export default newAccount;